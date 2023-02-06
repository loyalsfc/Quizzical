import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../Context'
import InputWrapper from './Wrapper'

function ProfileSettings() {
    const {user} = useContext(Context)
    const [formData, setFormData] = useState({})

    useEffect(()=>{
        setFormData({
            fullName: user?.displayName,
            email: user?.email,
            phoneNumber: user?.phoneNumber === null ? '' : user?.phoneNumber
        })
    }, [user])

    function handleChange(e){
        const {value, id} = e.target
        setFormData({...formData, [id]: value})
    }
    
    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <article>
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
                <button className='bg-green-100 text-white font-medium w-full rounded py-1.5'>Update</button>
            </form>
        </article>
    )
}

export default ProfileSettings
