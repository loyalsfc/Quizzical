import React, { useEffect, useState } from 'react'
import Header from '../component/Header';
import { collection, getDocs } from "firebase/firestore"; 
import db from '../firebaseconfig';
import LazyLoading from '../component/LazyLoading';



function LeaderBoard() {
    const [scores, setScores] = useState({data: [], isLoading: true})

    useEffect(()=>{
        async function fetchResults(database, callBack) {
            const querySnapshot = await getDocs(collection(db, database));
            let dbItems = []
            querySnapshot.forEach((doc) => {
                dbItems.push({id: doc.id, data: doc.data()})
            });
            callBack({
                        data: dbItems.sort((a, b) => b.data.average - a.data.average),
                        isLoading: false
                    })
        }        
        fetchResults("results", setScores)
        .catch(console.error)
    },[])

    return (
        <div className='container mx-auto px-4'>
            <div className='max-w-[1200px]  mx-auto h-screen flex flex-col'>
                <Header />
                <main className='pb-10  '>
                    <table className='w-full max-w-2xl mx-auto mt-10 text-sm sm:text-base border border-green-100'>
                        <thead className=''>
                            <tr className='text-white rounded-md overflow-hidden mb-4 bg-green-100'>
                                <th className='py-2 font-semibold'>S/N</th>
                                <th className='font-semibold'>Name</th>
                                <th className='font-semibold'>Topics</th>
                                <th className='font-semibold'>Average Score</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                        {scores.isLoading ? (
                            <LazyLoading />
                            ):(
                                scores.data.map((score, index) => {
                                    return (
                                        <tr key={score.id} className="even:bg-green-100/5 border border-green-100">
                                            <td className='py-2'>{index + 1}</td>
                                            <td className='text-left font-semibold'>{score.data?.name}</td>
                                            <td>{score.data?.topics}</td>
                                            <td>{score.data?.average}%</td>
                                        </tr>        
                                        )
                                    })
                                )
                        }
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    )
}

export default LeaderBoard
