import React, {useContext, useRef, useState} from 'react'
import Registration, {InputWrapper} from './Registration'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseconfig';
import { Context } from '../Context';
import AuthenticationError from '../component/AuthenticationError';
import { signInUser } from '../utils';
import googleLoginAuthentication from '../socialAuthentication';

function Register() {
    const navigate = useNavigate()
    const {setUser} = useContext(Context)
    const [showError, setShowError] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const submitButton = useRef()


    const handleChange = (e) => {
        const {id, value} = e.target
        setFormData({...formData, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submitButton.current.innerHTML = '<div class="loader mx-auto"></div>'
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
            // Signed in 
            signInUser(userCredential, navigate, setUser)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode === "auth/email-already-in-use"){
                setShowError(true);
            }
            submitButton.current.innerHTML = 'Sign up'
        });
    }
    return (
        <div>
            <Registration>   
                <article className='text-center'>
                        <h2>Welcome!</h2>
                        <p>Please Sign up to access our service</p>    
                </article>
                <form onSubmit={handleSubmit} className='w-[347px] max-w-full flex flex-col gap-3 relative'>
                    {showError && <AuthenticationError note="Account Already Exist" setShowError={setShowError}/>}
                        <div>
                            <InputWrapper
                                id='name'
                                label='Name'
                            >
                                <input 
                                    className='form-input'
                                    id='name'
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                />
                            </InputWrapper>
                            <InputWrapper 
                                id='email'
                                label='Email Address'
                            >
                                <input
                                    id='email'
                                    type='email'
                                    name='email'
                                    className='form-input'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Your Email Address"
                                />
                            </InputWrapper>
                            <InputWrapper 
                                id='password'
                                label='Password'
                            >
                            <input
                                id='password'
                                type='password'
                                name='password'
                                className='form-input'
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter Password"
                            />
                            </InputWrapper>
                        </div>
                        <div className='text-xs text-black/[0.61] flex justify-between '>
                            <div className='flex '>
                                <input 
                                    type='checkbox' 
                                    id='remember-me'
                                    name='remember-me'
                                />
                                <label className='ml-2' htmlFor='remember-me'>Remember Me</label>
                            </div>
                            <p>Forgot password?</p>
                        </div>
                        <button ref={submitButton} className='bg-green-100 w-full py-3 text-white font-medium'>Sign up</button>
                </form>
                <p>Or login with <span className='font-bold text-green-100 mr-3'>Facebook</span> <span onClick={()=>googleLoginAuthentication(navigate, setUser)} className='font-bold text-green-100'>Google</span></p>
                <p>Already have an account? <Link to='/login' className='text-green-100 font-medium'>Sign in</Link></p>
            </Registration>
        </div>
    )
}

export default Register
