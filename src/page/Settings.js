import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../component/Header'

function Settings() {


  return (
        <div className='container mx-auto flex flex-col h-screen'>
            <Header />
            <main className='grid sm:place-content-center flex-1'>
                <div className='bg-white flex flex-col sm:flex-row py-10 px-4 sm:h-96'>
                  <aside>
                    <ul className='font-medium'>
                      <li className='py-2 px-4 cursor-pointer hover:bg-green-100/10'>
                        <Link className='w-full block' to="/settings">Profile Picture</Link>
                      </li>
                      <li className='py-2 px-4 cursor-pointer hover:bg-green-100/10'>
                        <Link className='w-full block' to="/settings/profile">Details</Link>
                      </li>
                      <li className='py-2 px-4 cursor-pointer hover:bg-green-100/10'>
                        <Link className='w-full block' to="/settings/password">Password</Link>
                      </li>
                    </ul>
                  </aside>
                  <section className='sm:px-8 sm:min-w-[400px] pt-8 sm:pt-0'>
                    <Outlet />
                  </section>
                </div>
            </main>
        </div>
  )
}

export default Settings
