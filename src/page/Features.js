import React from 'react'
import Header from '../component/Header'

function Features() {
    return (
        <div>
            <Header />
            <main>
                <h3 className='text-2xl font-medium mb-10'>Key Features</h3>
                <div className='grid grid-cols-3 gap-8'>
                    <FeatureItem feature="Leaderboard" icon="fa-ranking-star" />
                    <FeatureItem feature="Timer" icon="fa-hourglass-half" />
                    <FeatureItem feature="Percentage Result" icon="fa-star" />
                    <FeatureItem feature="Randomize questions" icon="fa-shuffle" />
                    <FeatureItem feature="Rewards" icon="fa-hand-holding-dollar" />
                    <FeatureItem feature="Challenge" icon="fa-hand-holding  -dollar" />
                </div>
                <button>Get started</button>
            </main>
        </div>
    )
}

function FeatureItem({feature, icon}){
    return (
        <div className='bg-white rounded-md p-10 flex items-center'>
            <div className='h-20 w-20 rounded-full flex items-center justify-center bg-green-100 text-white text-4xl'>
                <i className={`fa-solid ${icon}`}></i>
            </div>
            <p className='font-medium text-xl ml-4'>{feature}</p>
        </div>
    )
}

export default Features
