import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../component/Header'
import { Context } from '../Context'

function Settings() {


  return (
        <div className='container mx-auto flex flex-col h-screen'>
            <Header />
            <main className='grid place-content-center flex-1'>
                <div className='bg-white flex py-10 px-4 h-96'>
                  <aside>
                    <ul className='font-medium'>
                      <li className='py-2 px-4 cursor-pointer hover:bg-green-100/10'>
                        <Link to="/settings">Profile Picture</Link>
                      </li>
                      <li className='py-2 px-4 cursor-pointer hover:bg-green-100/10'>
                        <Link to="/settings/profile">Details</Link>
                      </li>
                      <li className='py-2 px-4 cursor-pointer hover:bg-green-100/10'>
                        <Link to="/settings/password">Password</Link>
                      </li>
                    </ul>
                  </aside>
                  <section className='px-8 min-w-[400px]'>
                    <Outlet />
                  </section>
                </div>
            </main>
        </div>
  )
}

export default Settings
