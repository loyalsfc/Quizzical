import React, {useContext, useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Registration, {InputWrapper} from './Registration'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseconfig';
import AuthenticationError from '../component/AuthenticationError';
import { signInUser } from '../utils';
import { Context } from '../Context';
import googleLoginAuthentication from '../socialAuthentication';

function Login() {
    const signButton = useRef()
    const navigate = useNavigate()
    const {setUser} = useContext(Context)
    const [showError, setShowError] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {id, value} = e.target
        setFormData({...formData, [id]: value})
    }

    function handleSubmit(e){
        e.preventDefault();
        signButton.current.innerHTML = '<div class="loader mx-auto"></div>';
        signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
            // Signed in 
            signInUser(userCredential, navigate, setUser)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password'){
                setShowError(true)
            }
            signButton.current.innerHTML = 'Sign in';
        });
    }

    function handleGoogleLogin(){
        googleLoginAuthentication(navigate, setUser)
    }

    return (
        <div>
            <Registration>
                <article className='text-center'>
                    <h2>Welcome!</h2>
                    <p>Please Sign up to access our service</p>    
                </article>
                <form onSubmit={handleSubmit} className='w-[347px] max-w-full flex flex-col gap-3'>
                            <div>
                                {showError && <AuthenticationError setShowError={setShowError} note="Invalid email or password"/>}
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
                            <button ref={signButton} className='bg-green-100 w-full py-3 text-white font-medium'>Sign in</button>
                </form>
                <p>Or login with <span className='font-bold text-green-100 mr-3'>Facebook</span> <span onClick={handleGoogleLogin} className='cursor-pointer font-bold text-green-100'>Google</span></p>
                <p>Already have an account? <Link to='/register' className='text-green-100 font-medium'>Sign up</Link></p>
            </Registration>
        </div>
    )
}

export default Login
