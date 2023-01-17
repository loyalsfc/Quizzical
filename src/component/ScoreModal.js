import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ScoreModal({score}) {
    const [averageScore, setAverageScore] = useState(0)
    console.log(score)
    useEffect(()=>{
        let avgScore = 0
        score.forEach(score => {
            avgScore += score.score
        });
        setAverageScore((avgScore / score.length).toFixed(1) * 10)
    },[])

    const scores = score.map((score, index) => {
        return (
            <div className='flex justify-between' key={index}>
                <p>{score.subject}:</p> 
                <p>{score.score * 10}%</p>
            </div>
        )
    })


    return (
        <div className='h-screen w-full bg-black/[0.5] flex items-center justify-center fixed top-0 left-0'>
            <div className='h-[70%] w-[70%] bg-white grid grid-cols-3 justify-items-center content-center relative place-content-end'>
                <div />
                <div className='h-72 w-72  text-white rounded-full bg-green-100 flex flex-col items-center justify-center'>
                    <h4 className='text-3xl text-center mb-2'>Your scores</h4>
                    <div className='font-medium w-full px-4'>
                        {scores}
                    </div>
                    <p className='mt-4 text-lg'>Average Score: {averageScore}%</p>
                </div>
                <Link to="/" className='self-end'><button className='right-10 bg-green-100 font-medium leading-5 px-6 py-3 shadow text-white'>Continue</button></Link>
            </div>
        </div>
    )
}

export default ScoreModal
