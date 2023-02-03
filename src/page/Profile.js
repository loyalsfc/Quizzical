import React, { useContext, useEffect, useState } from 'react'
import Header from '../component/Header'
import { Context } from '../Context'
import { fetchResults } from '../utils'

function Profile() {
    const {user} = useContext(Context)
    const [history, setHistory] = useState([])
    useEffect(()=>{
        fetchResults('users', setHistory)
    },[])

    console.log(history)
    return (
        <div className='container mx-auto'>
            <Header />
            <main>
                <div className='h-44 bg-center bg-cover bg-no-repeat bg-header '></div>
                <div className='flex items-end gap-8 -mt-14  px-10'>
                    <div className='h-36 w-36 shadow-lg rounded-full overflow-hidden flex items-center justify-center'>
                        <img src={user ? user.photoURL : ""} className="w-full"/>
                    </div>
                    <article>
                        <h2 className='font-semibold text-2xl leading-10'>{user ? user.displayName : ""}</h2>
                        <p className=''>{user ? user.email : ""}</p>
                    </article>
                </div>
                <section>
                    <h3 className='mt-10 mb-6 text-2xl font-semibold text-center'>History</h3>
                    <table className='w-full max-w-3xl mx-auto'>
                        <thead className='border-b border-b-green-100 '>
                            <tr>
                                <th className='py-2'>S/N</th>
                                <th>Date</th>
                                <th>Topics</th>
                                <th>Average</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                history.map((item, index) => {
                                    const date = new Date(item.data.date.toDate())
                                    const yyyy = date.getFullYear()
                                    const mm = date.getMonth()
                                    const dd = date.getDate()
                                    const minute = date.getMinutes()
                                    const hour = date.getHours()
                                    return(
                                        <tr key={item.id}>
                                            <td className='py-2'>{index + 1}</td>
                                            <td>{`${dd.toString().padStart(2, 0)}/${(mm + 1).toString().padStart(2, 0)}/${yyyy} ${hour}:${minute}`}</td>
                                            <td>{item.data.topics}</td>
                                            <td>{item.data.averageScore }%</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    )   
}

export default Profile
