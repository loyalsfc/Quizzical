import React, { useContext } from 'react'
import Header from '../component/Header'
import { Context } from '../Context'

function Settings() {
  const {user} = useContext(Context)

  return (
        <div className='container mx-auto'>
            <Header />
            <main>
                <aside></aside>
                <section>
                  <article>
                    <div>
                      <img src={user?.photoURL} alt="Existing profile pix" className='w-full' />
                    </div>
                  </article>
                </section>
            </main>
        </div>
  )
}

export default Settings
