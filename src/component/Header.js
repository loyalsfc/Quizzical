import { getAuth, signOut } from "firebase/auth";
import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Context } from '../Context';
import { auth } from "../firebaseconfig";


function Header() {
    const {user, setUser} = useContext(Context)
    const navigate = useNavigate()
    const mobileMenu = useRef();
    function toggleNav(){
        mobileMenu.current.classList.toggle('w-0')
    }

    function logOut(){
        signOut(auth).then(() => {
            localStorage.removeItem('auth')
            setUser(null)
            navigate('/')
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <header className='flex justify-between items-center pt-9 pb-5 border-b border-b-grey-100'>
            <div ref={mobileMenu} className='bg-white h-screen w-full fixed top-0 left-0 md:hidden transition-all flex pt-32 justify-center w-0'>
                <svg onClick={toggleNav} className='absolute right-3 top-3' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.1303 9.699L17.3654 3.47752C17.6384 3.20444 17.7918 2.83406 17.7918 2.44786C17.7918 2.06166 17.6384 1.69128 17.3654 1.4182C17.0923 1.14512 16.722 0.991699 16.3358 0.991699C15.9497 0.991699 15.5794 1.14512 15.3063 1.4182L9.08573 7.65418L2.86514 1.4182C2.5921 1.14512 2.22177 0.991699 1.83563 0.991699C1.44948 0.991699 1.07916 1.14512 0.806111 1.4182C0.533067 1.69128 0.379672 2.06166 0.379672 2.44786C0.379672 2.83406 0.533067 3.20444 0.806111 3.47752L7.0412 9.699L0.806111 15.9205C0.670203 16.0553 0.56233 16.2157 0.488714 16.3924C0.415099 16.5691 0.377197 16.7587 0.377197 16.9501C0.377197 17.1416 0.415099 17.3311 0.488714 17.5079C0.56233 17.6846 0.670203 17.845 0.806111 17.9798C0.940909 18.1157 1.10128 18.2236 1.27798 18.2972C1.45468 18.3709 1.64421 18.4088 1.83563 18.4088C2.02705 18.4088 2.21657 18.3709 2.39327 18.2972C2.56997 18.2236 2.73034 18.1157 2.86514 17.9798L9.08573 11.7438L15.3063 17.9798C15.4411 18.1157 15.6015 18.2236 15.7782 18.2972C15.9549 18.3709 16.1444 18.4088 16.3358 18.4088C16.5273 18.4088 16.7168 18.3709 16.8935 18.2972C17.0702 18.2236 17.2306 18.1157 17.3654 17.9798C17.5013 17.845 17.6091 17.6846 17.6828 17.5079C17.7564 17.3311 17.7943 17.1416 17.7943 16.9501C17.7943 16.7587 17.7564 16.5691 17.6828 16.3924C17.6091 16.2157 17.5013 16.0553 17.3654 15.9205L11.1303 9.699Z" fill="#D1D1D1"/>
                </svg>
                <Navigation user={user} logOut={logOut} navigate={toggleNav}/>
            </div>
            <Link to='/'><img src={logo} /></Link>
            <nav className='hidden md:block'>
                <Navigation user={user} logOut={logOut} navigate={navigate}/>
            </nav>
            <svg onClick={toggleNav} className='md:hidden' width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24.5H29.0312M10 17.25H29.0312M10 10H29.0312" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </header>
    )
}

function Navigation({user, logOut, navigate}){
    return(
        <ul className='flex flex-col md:flex-row gap-6 items-center text-grey-100'>
            <li className='cursor-pointer'>How it works?</li>
            <li className='cursor-pointer'>Features</li>
            <li className='cursor-pointer'><Link to="/about-us">About Us</Link></li>
            {user ? (<li className='profile cursor-pointer flex items-center text-green-100 relative'>
                <svg className='mr-2' width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.19878 16.4067C0.543528 12.8479 3.08021 10.797 4.57264 9.86288C1.60252 6.87452 2.96059 2.87885 4.57264 1.54341C6.44837 -0.0104475 9.80586 -0.716307 11.9981 1.9531C14.7051 5.24942 13.1265 8.54488 11.9981 9.86288C12.7261 10.5038 15.2288 12.1698 15.5958 15.5941C16.0588 19.9146 2.01785 20.8552 1.19878 16.4067Z" fill="#31CD63"/>
                    <path d="M1.19878 16.4067C0.543528 12.8479 3.08021 10.797 4.57264 9.86288C1.60252 6.87452 2.96059 2.87885 4.57264 1.54341C6.44837 -0.0104475 9.80586 -0.716307 11.9981 1.9531C14.7051 5.24942 13.1265 8.54488 11.9981 9.86288C12.7261 10.5038 15.2288 12.1698 15.5958 15.5941C16.0588 19.9146 2.01785 20.8552 1.19878 16.4067Z" stroke="#31CD63" strokeWidth="0.29551"/>
                </svg>
                <span className='mr-1'>{user?.displayName.split(" ")[0]}</span>
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.69796 5.67727C3.54975 5.67652 3.40356 5.64279 3.27 5.57852C3.13644 5.51426 3.01887 5.42106 2.9258 5.30571L0.481607 2.3448C0.338784 2.16655 0.248907 1.95176 0.222219 1.72491C0.195531 1.49806 0.233104 1.26828 0.330659 1.06175C0.409779 0.882249 0.538894 0.72932 0.702583 0.621223C0.866272 0.513127 1.05762 0.454432 1.25376 0.452148H6.14216C6.3383 0.454432 6.52965 0.513127 6.69334 0.621223C6.85703 0.72932 6.98614 0.882249 7.06526 1.06175C7.16282 1.26828 7.20039 1.49806 7.1737 1.72491C7.14701 1.95176 7.05714 2.16655 6.91431 2.3448L4.47012 5.30571C4.37705 5.42106 4.25948 5.51426 4.12592 5.57852C3.99236 5.64279 3.84617 5.67652 3.69796 5.67727Z" fill="#31CD63"/>
                </svg>
                <div className='dropdown bg-white py-1 rounded-md md:shadow absolute top-full'>
                    <ul>
                        <li className='hover:bg-gray-100 sm:border-b py-2 sm:py-1 px-5'>Profile</li>
                        <li className='hover:bg-gray-100 sm:border-b py-2 sm:py-1 px-5'><Link to='/leaderboard'>Leaderboard</Link></li>
                        <li className='hover:bg-gray-100 sm:border-b py-2 sm:py-1 px-5'>Settings</li>
                        <li onClick={()=>{logOut(); navigate()}} className='hover:bg-gray-100 pt-1 px-5'>Logout</li>
                    </ul>
                </div>
            </li>
            ):(
                <Link to='/login'><button className='font-medium text-sm text-green-100 leading-5 py-1.5 px-5 border border-green-100 hover:bg-green-100 hover:text-white'>Login</button></Link>
            )}
        </ul>
    )
}

export default Header
