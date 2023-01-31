import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"; 
import db from '../firebaseconfig';
import Header from '../component/Header';


function LeaderBoard() {
    const [scores, setScores] = useState([])

    useEffect(()=>{
        async function fetchResults() {
            const querySnapshot = await getDocs(collection(db, "results"));
            let dbItems = []
            querySnapshot.forEach((doc) => {
                dbItems.push({id: doc.id, data: doc.data()})
                // console.log(doc.data())
                // console.log(`${doc.id} => ${doc.data()}`);
            });
            setScores(dbItems)
        }

        fetchResults()
        .catch(console.error)
    },[])

    console.log(scores)

    return (
        <div className='container mx-auto px-4'>
            <div className='max-w-[1200px]  mx-auto h-screen flex flex-col'>
                <Header />
                <main>
                    <table className='w-full max-w-2xl mx-auto mt-10  border border-green-100'>
                        <thead className=''>
                            <tr className='text-white rounded-md overflow-hidden mb-4 bg-green-100'>
                                <th className='py-2 font-semibold'>S/N</th>
                                <th className='font-semibold'>Name</th>
                                <th className='font-semibold'>Topics</th>
                                <th className='font-semibold'>Average Score</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                        {
                        scores.map((score, index) => {
                                return (
                                    <tr key={score.id} className="even:bg-green-100/5 border border-green-100">
                                        <td className='py-2'>{index + 1}</td>
                                        <td className='text-left font-semibold'>{score.data?.name}</td>
                                        <td>{score.data?.topics}</td>
                                        <td>{score.data?.average}</td>
                                    </tr>        
                                )
                            })
                        }
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    )
}

export default LeaderBoard
