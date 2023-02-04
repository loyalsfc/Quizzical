import React, { useState } from 'react'
import capImage from '../assets/graduate.png'
import logo from '../assets/logo.png'
function Registration({children}) {
    

    return (
        <div className='flex'>
            <main className='w-full sm:w-1/2 bg-white '>
                <div className='h-screen flex flex-col justify-center items-center gap-5 p-2 overflow-hidden'>
                    <div><img src={logo} /></div>
                    {children}
                </div>
            </main>
            <aside className='w-1/2 hidden shrink-0 sm:grid place-content-center h-screen'>
                <img src={capImage} />
            </aside>
        </div>
    )
}

function InputWrapper({id, label, children}){
    return <div className='border-[0.5px] border-[#C1BBBB] max-w-[347px] py-2 px-3.5 border-b-0 last:border-b-[0.5px]'>
        <label className='text-xs text-black/[0.61]' htmlFor={id}>{label}</label>
        {children}
    </div>
}

export {InputWrapper}
export default Registration
