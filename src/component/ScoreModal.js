import React from 'react'

function ScoreModal({score}) {
    return (
        <div className='h-screen w-full bg-black/[0.5] flex items-center justify-center fixed top-0 left-0'>
            <div className='h-[70%] w-[70%] bg-white grid grid-cols-3 justify-items-center content-center relative place-content-end'>
                <div />
                <div className='h-72 w-72 text-[7rem] text-white rounded-full bg-green-100 flex flex-col items-center justify-center'>
                    <h4 className='text-3xl text-center'>Your score</h4>
                    <span>{score * 10}%</span>
                </div>
                <button className='self-end right-10 bg-green-100 font-medium leading-5 px-6 py-3 shadow text-white'>Continue</button>
            </div>
        </div>
    )
}

export default ScoreModal
