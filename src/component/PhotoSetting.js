import React, { useContext, useRef } from 'react'
import { Context } from '../Context';
import {updateProfile } from "firebase/auth";
import { auth } from '../firebaseconfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PhotoSetting() {
    const {user} = useContext(Context);
    const profileImage = useRef();

    function convertBase(file){
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
        
            fileReader.readAsDataURL(file)

            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    async function handleProfileChange(e){
        const file = e.target.files[0];
        const baseImage = await convertBase(file);
        profileImage.current.src = baseImage;
        updateProfile(auth.currentUser, {
                photoURL: baseImage
            }).then(() => {
                // Profile updated!
                toast('Password Reset Successful')
            }).catch((error) => {
            // An error occurred
            // ...
                toast('An error occured')
                console.log(error)
        });
    }

    return (
        <article className='grid place-content-center w-[252px] max-w-full mx-auto'>
            <ToastContainer  position="top-center"/>
            <div className='h-36 w-36 rounded-full shadow-md overflow-hidden relative image-wrapper' >
                <div className='h-full w-full absolute bg-black/20 hidden items-end justify-center pb-4'>
                    <label htmlFor='upload-image' className='text-white'>
                        <i className="fa-solid fa-camera-retro text-xl"></i>
                    </label>
                    <input type="file" id='upload-image' name='upload-image' accept='image/*' onChange={handleProfileChange} className='hidden'/>
                </div>
                <img ref={profileImage} src={user?.photoURL} alt="Existing profile pix" className='w-full' />
            </div>
        </article>
    )
}

export default PhotoSetting
