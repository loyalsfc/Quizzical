import React, {useState} from 'react'
import Registration, {InputWrapper} from './Registration'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseconfig';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {id, value} = e.target
        setFormData({...formData, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage)
        });
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
                        <button className='bg-green-100 w-full py-3 text-white font-medium'>Sign up</button>
                </form>
                <p>Or login with <span className='font-bold text-green-100 mr-3'>Facebook</span> <span className='font-bold text-green-100'>Google</span></p>
                <p>Already have an account? <Link to='/login' className='text-green-100 font-medium'>Sign in</Link></p>
            </Registration>
        </div>
    )
}

export default Register
