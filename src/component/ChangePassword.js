import React, {useContext, useRef, useState} from 'react'
import { Context } from '../Context'
import InputWrapper from './Wrapper'

function ChangePassword() {
    const {user} = useContext(Context)
    const passwordAlert = useRef()

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
        if(newPassword !== confirmPassword){
            passwordAlert.current.textContent = 'Password Does not match'
            passwordAlert.current.classList.remove('hidden')
            return
        } else if(newPassword === "" || confirmPassword  === ""){
            passwordAlert.current.textContent = 'Enter all fields'
            passwordAlert.current.classList.remove('hidden')
            return
        } else if(newPassword.length < 8){
            passwordAlert.current.textContent = 'Password Cannot be less than 8'
            passwordAlert.current.classList.remove('hidden')
            return
        }
        alert('Submitted')
    }

    return (
        <article>
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
                <button className='bg-green-100 text-white font-medium w-full rounded py-1.5'>Update</button>
            </form>
        </article>
    )
}

export default ChangePassword
