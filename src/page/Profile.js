import React, { useContext, useEffect, useState } from 'react'
import Header from '../component/Header'
import { Context } from '../Context'
import { collection, getDocs } from "firebase/firestore"; 
import db from '../firebaseconfig';
import LazyLoading from '../component/LazyLoading';

function Profile() {
    const { user } = useContext(Context)
    const [history, setHistory] = useState({result: [], isLoading: true})

    useEffect(()=>{
        // Fetch the result from the database
        async function fetchResults() {
            const querySnapshot = await getDocs(collection(db, 'users', 'history', user?.uid));
            //initialize empty array to save database result
            let dbItems = []
            //Loop through the array and save the id and data object in the array
            querySnapshot.forEach((doc) => {
                dbItems.push({id: doc.id, data: doc.data()})
            });
            //Sort the arrays according to their time submitted and update the history state
            setHistory({
                result: dbItems.sort((a,b) => b.data.date.toDate().getTime() -  a.data.date.toDate().getTime()),
                isLoading: false
            })
        }        

        //Check if user is sign in and run the fetchResult function
        if(user){
            fetchResults()
            .catch(console.error)
        }
    },[user])

    return (
        <div className='container mx-auto px-4  '>
            <Header />
            <main>
                <div className='h-28 sm:h-44 bg-center bg-cover bg-no-repeat bg-header '></div>
                <div className='flex items-end gap-2 sm:gap-8 -mt-14 md:px-10'>
                    <div className='h-28 w-28 sm:h-36 sm:w-36 shrink-0 shadow-lg rounded-full overflow-hidden flex items-center justify-center'>
                        <img src={user ? user.photoURL : ""} className="w-full"/>
                    </div>
                    <article>
                        <h2 className='font-semibold text-xl sm:text-2xl sm:leading-10'>{user ? user.displayName : ""}</h2>
                        <p className='text-sm sm:text-base'>{user ? user.email : ""}</p>
                    </article>
                </div>
                <section>
                    <h3 className='mt-10 mb-6 text-2xl font-semibold text-center'>History</h3>
                    <table className='w-full max-w-3xl mx-auto text-sm sm:text-base'>
                        <thead className='border-b border-b-green-100 '>
                            <tr>
                                <th className='py-2'>S/N</th>
                                <th>Date</th>
                                <th>Topics</th>
                                <th>Average</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {//Check if isLoading is true and display the lazy loading components
                            //Once loading is completed map through the histories and display them in history table
                            history.isLoading ? (
                                <LazyLoading />
                            ):( 
                                    history.result.map((item, index) => {
                                        //Converting date format to display them
                                        const date = new Date(item.data.date.toDate())
                                        const yyyy = date.getFullYear().toString().slice(2)
                                        const mm = (date.getMonth() + 1).toString().padStart(2, 0)
                                        const dd = date.getDate().toString().padStart(2, 0)
                                        const minute = date.getMinutes().toString().padStart(2, 0)
                                        const hour = date.getHours().toString().padStart(2, 0)
                                        return(
                                            <tr className='even:bg-green-100/[0.1]' key={item.id}>
                                                <td className='py-2'>{index + 1}</td>
                                                <td>{`${dd}/${mm}/${yyyy} ${hour}:${minute}`}</td>
                                                <td>{item.data.topics}</td>
                                                <td>{item.data.averageScore }%</td>
                                            </tr>
                                        )
                                    })
                                )
                            }
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    )   
}

export default Profile
