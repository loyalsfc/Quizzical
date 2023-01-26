import React, {useContext, useState} from 'react'
import Registration, {InputWrapper} from './Registration'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseconfig';
import { Context } from '../Context';

function Register() {
    const navigate = useNavigate()
    const {setUser} = useContext(Context)
    const [showError, setShowError] = useState(false)
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
            setUser(user);
            localStorage.setItem('auth', JSON.stringify(user))
            navigate('/');
        })
        .catch((error) => {
            console.log(error)
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode === "auth/email-already-in-use"){
                setShowError(true);
            }
        });
    }
    return (
        <div>
            <Registration>   
                <article className='text-center'>
                        <h2>Welcome!</h2>
                        <p>Please Sign up to access our service</p>    
                </article>
                <form onSubmit={handleSubmit} className='w-[347px] max-w-full flex flex-col gap-3 relative'>
                    {showError && <div className='bg-red-100 text-red-500 text-center text-sm py-4 relative'>
                        <svg onClick={()=>setShowError(false)} className='absolute right-2 top-2' width="12" height="12" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-red-500' d="M11.1303 9.699L17.3654 3.47752C17.6384 3.20444 17.7918 2.83406 17.7918 2.44786C17.7918 2.06166 17.6384 1.69128 17.3654 1.4182C17.0923 1.14512 16.722 0.991699 16.3358 0.991699C15.9497 0.991699 15.5794 1.14512 15.3063 1.4182L9.08573 7.65418L2.86514 1.4182C2.5921 1.14512 2.22177 0.991699 1.83563 0.991699C1.44948 0.991699 1.07916 1.14512 0.806111 1.4182C0.533067 1.69128 0.379672 2.06166 0.379672 2.44786C0.379672 2.83406 0.533067 3.20444 0.806111 3.47752L7.0412 9.699L0.806111 15.9205C0.670203 16.0553 0.56233 16.2157 0.488714 16.3924C0.415099 16.5691 0.377197 16.7587 0.377197 16.9501C0.377197 17.1416 0.415099 17.3311 0.488714 17.5079C0.56233 17.6846 0.670203 17.845 0.806111 17.9798C0.940909 18.1157 1.10128 18.2236 1.27798 18.2972C1.45468 18.3709 1.64421 18.4088 1.83563 18.4088C2.02705 18.4088 2.21657 18.3709 2.39327 18.2972C2.56997 18.2236 2.73034 18.1157 2.86514 17.9798L9.08573 11.7438L15.3063 17.9798C15.4411 18.1157 15.6015 18.2236 15.7782 18.2972C15.9549 18.3709 16.1444 18.4088 16.3358 18.4088C16.5273 18.4088 16.7168 18.3709 16.8935 18.2972C17.0702 18.2236 17.2306 18.1157 17.3654 17.9798C17.5013 17.845 17.6091 17.6846 17.6828 17.5079C17.7564 17.3311 17.7943 17.1416 17.7943 16.9501C17.7943 16.7587 17.7564 16.5691 17.6828 16.3924C17.6091 16.2157 17.5013 16.0553 17.3654 15.9205L11.1303 9.699Z" />
                        </svg>
                        Account already Exist
                    </div>}
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
