import React, {useContext, useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Registration, {InputWrapper} from '../component/Registration'
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

    //Update the form data state
    const handleChange = (e) => {
        const {id, value} = e.target
        setFormData({...formData, [id]: value})
    }

    //Handle form submit
    function handleSubmit(e){
        e.preventDefault();
        //Change the submit button text to a loader
        signButton.current.innerHTML = '<div class="loader mx-auto"></div>';
        //Authentication with Email and password with firebase
        signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
            // Signed in successful, run the SignInUser function
            signInUser(userCredential, navigate, setUser)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //Check for error display and display the error to the user
            if(errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password'){
                setShowError(true)
            }
            //Change the submit button text back to sign in
            signButton.current.innerHTML = 'Sign in';
        });
    }

    function handleGoogleLogin(){
        //Authentication with google
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
                                <p><Link to="/reset-password">Forgot password?</Link></p>
                            </div>
                            <button ref={signButton} className='bg-green-100 w-full py-3 text-white font-medium'>Sign in</button>
                </form>
                <p>Or login with <span className='font-bold text-green-100 mr-1'>Facebook</span> <span onClick={handleGoogleLogin} className='cursor-pointer font-bold text-green-100'>Google</span></p>
                <p>Already have an account? <Link to='/register' className='text-green-100 font-medium'>Sign up</Link></p>
            </Registration>
        </div>
    )
}

export default Login
