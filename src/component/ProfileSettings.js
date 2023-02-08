import React, { useContext, useState, useEffect, useRef } from 'react'
import { Context } from '../Context'
import InputWrapper from './Wrapper'
import { updateProfile } from "firebase/auth";
import { auth } from '../firebaseconfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProfileSettings() {
    const {user} = useContext(Context)
    const [formData, setFormData] = useState({})
    const submitButton = useRef()
    const notifText = useRef()

    useEffect(()=>{
        //Set the initial user data in the input box
        setFormData({
            fullName: user?.displayName,
            email: user?.email,
            phoneNumber: user?.phoneNumber === null ? '' : user?.phoneNumber
        })
    }, [user])

    //Updating the formData state 
    function handleChange(e){
        const {value, id} = e.target
        setFormData({...formData, [id]: value})
    }
    
    function handleSubmit(e){
        e.preventDefault();
        //Desctructure formData onsubmit
        const {fullName, phoneNumber} = formData
        if(fullName === ""){
            //Check if user full name is empty and throw an error
            notifText.current.classList.remove('hidden');
            return;
        }
        //Change the submit button text to a loader
        submitButton.current.innerHTML = '<div class="loader mx-auto"></div>';
        //Update the user profile
        updateProfile(auth.currentUser, {
            displayName: fullName, phoneNumber: phoneNumber,
            }).then(() => {
                // Profile updated!
                //Show Success notification to user
                toast("Profile Updated Successfully")
                //Restore button text back to initial
                submitButton.current.innerHTML = 'Update';
            }).catch((error) => {
                // An error occurred
                //Show error notification
                toast("An error occured")
                //Restore button text back to initial
                submitButton.current.innerHTML = 'Update';
        });
    }

    return (
        <article>
            <ToastContainer position="top-center"/>
            <form onSubmit={handleSubmit} className="px-4">
                <InputWrapper id='fullName' label='Full Name'>
                    <input
                        type='text'
                        name='fullName'
                        id='fullName'
                        value={formData?.fullName}
                        onChange={handleChange}
                        className="input-style"
                    />
                </InputWrapper>
                <InputWrapper id='email' label='email'>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        value={formData?.email}
                        onChange={handleChange}
                        disabled = {true}
                        className="input-style"
                    />
                </InputWrapper>
                <InputWrapper id='phoneNumber' label='Phone No'>
                    <input
                        type='text'
                        name='phoneNumber'
                        id='phoneNumber'
                        value={formData?.phoneNumber}
                        onChange={handleChange}
                        className="input-style"
                    />
                </InputWrapper>
                <p ref={notifText} className='text-red-500 text-sm mb-2 hidden'>Name Cannot be blank</p>
                <button ref={submitButton} className='bg-green-100 text-white font-medium w-full rounded py-1.5'>Update</button>
            </form>
        </article>
    )
}

export default ProfileSettings
