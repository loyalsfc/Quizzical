import React, {useRef, useState} from 'react'
import InputWrapper from './Wrapper'
import { updatePassword } from "firebase/auth";
import { auth } from '../firebaseconfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ChangePassword() {
    const passwordAlert = useRef()
    const submitButton = useRef()
    const [passwords, setPasswords] = useState({
        newPassword: '',
        confirmPassword: '',
    })

    function handlePasswordChange(e){
        const {value, id} = e.target;
        setPasswords({...passwords, [id]: value})
    }
    
    function handleSubmitPasswordChange(e){
        e.preventDefault()
        const {newPassword, confirmPassword} = passwords
        //Change the submit button text to a loader
        submitButton.current.innerHTML = '<div class="loader mx-auto"></div>';
        //Update the user password
        if(newPassword !== confirmPassword){
            //Throw an error if the user passwords doesn't match
            passwordAlert.current.textContent = 'Password Does not match'
            passwordAlert.current.classList.remove('hidden')
            return
        } else if(newPassword === "" || confirmPassword  === ""){
            //Throw an error if the newpassword or confirmpassword is empty
            passwordAlert.current.textContent = 'Enter all fields'
            passwordAlert.current.classList.remove('hidden')
            return
        } else if(newPassword.length < 8){
            //Throw an error if the user password is less than eight chaacter
            passwordAlert.current.textContent = 'Password Cannot be less than 8'
            passwordAlert.current.classList.remove('hidden')
            return
        }
        //Get user credentials
        const user = auth.currentUser;
        //Update user password
        updatePassword(user, newPassword).then(() => {
        // Update successful.
            //Displaying toast to confirm password update is successful
            toast('Password Reset Successful')
            //Set the button text back to previous
            submitButton.current.innerHTML = 'Update'
        }).catch((error) => {
            //Show error notification
            toast('An error occured')
            //Set the button text back to previous
            submitButton.current.innerHTML = 'Update'
        });
    }

    return (
        <article>
            <ToastContainer  position="top-center"/>
            <form className="px-4" onSubmit={handleSubmitPasswordChange}>
                <InputWrapper id='newPassword' label='Enter New Password'>
                    <input
                        type='password'
                        name='newPassword'
                        id='newPassword'
                        value={passwords?.newPassword}
                        onChange={handlePasswordChange}
                        className="input-style"
                    />
                </InputWrapper>
                <InputWrapper id='confirmPassword' label='Confirm Password'>
                    <input
                        type='password'
                        name='confirmPassword'
                        id='confirmPassword'
                        value={passwords?.confirmPassword}
                        onChange={handlePasswordChange}
                        className="input-style"
                    />
                </InputWrapper>
                <p ref={passwordAlert} className='my-2 text-red-500 hidden text-sm'></p>
                <button ref={submitButton} className='bg-green-100 text-white font-medium w-full rounded py-1.5'>Update</button>
            </form>
        </article>
    )
}

export default ChangePassword
