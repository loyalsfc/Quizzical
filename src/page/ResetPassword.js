import React, { useRef, useState } from 'react'
import AuthenticationError from '../component/AuthenticationError'
import Registration from '../component/Registration'
import InputWrapper from '../component/Wrapper'
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebaseconfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
    const [email, setEmail] = useState('')
    const submitButton = useRef()
    const [showError, setShowError] = useState(false)

    //Handles submitting password request form
    function handleSubmit(e){
        e.preventDefault();
        //Change button text to loader while user is waiting
        submitButton.current.innerHTML = '<div class="loader mx-auto"></div>';
        //Password reset with firebase
        sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            //Change the button text back to initial
            submitButton.current.innerHTML = 'Reset Password';
            //Show toast that password reset link have been sent
            toast("Password reset link sent")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //Show notification that an error occured
            setShowError(true)
            //Change the button text back to initial
            submitButton.current.innerHTML = 'Reset Password';
        });
    }

    //Update the email value state
    function handleChange(e){
        const value = e.target.value;
        setEmail(value)
    }

    return (
           <Registration>
                <ToastContainer  position="top-center"/>
                <article className='text-center'>
                    <h2 className='text-xl font-medium'>Forgot your Password?</h2>
                    <p>Don’t worry, resetting your password is easy. Enter your email address to receive a password reset link</p>    
                </article>
                <form onSubmit={handleSubmit} className='w-[347px] max-w-full flex flex-col gap-3'>
                     <div>
                         {showError && <AuthenticationError setShowError={setShowError} note="An error occured"/>}
                         <InputWrapper 
                             id='email'
                             label='Email Address'
                         >
                            <input
                                id='email'
                                type='email'
                                name='email'
                                className='form-input p-2 border border-green-100'
                                value={email}
                                onChange={handleChange}
                                placeholder="Enter Your Email Address *"
                                required
                            />
                         </InputWrapper>
                         <button ref={submitButton} className='bg-green-100 w-full text-white p-2 rounded'>Reset Password</button>
                     </div>
                </form>
           </Registration>
    )
}

export default ResetPassword
