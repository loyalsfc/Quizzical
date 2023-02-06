import React, { useContext } from 'react'
import { Context } from '../Context';

function PhotoSetting() {
    const {user} = useContext(Context)

    function handleProfileChange(e){
        const file = e.target.files[0];
    }

    return (
        <article className='grid place-content-center h-fu'>
            <div className='h-36 w-36 rounded-full shadow-md overflow-hidden relative image-wrapper' >
                <div className='h-full w-full absolute bg-black/20 hidden items-end justify-center pb-4'>
                    <label htmlFor='upload-image' className='text-white'>HHH</label>
                    <input type="file" id='upload-image' name='upload-image' onChange={handleProfileChange} className='hidden'/>
                </div>
                <img src={user?.photoURL} alt="Existing profile pix" className='w-full' />
            </div>
        </article>
    )
}

export default PhotoSetting
