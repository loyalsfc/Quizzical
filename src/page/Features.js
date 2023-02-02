import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../component/Header'

function Features() {
    return (
        <div className='container mx-auto px-4'>
            <div className='max-w-[1200px]  mx-auto h-screen flex flex-col'>
                <Header />
                <main>
                    <h3 className='text-2xl font-medium mt-10 mb-4'>Key Features</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <FeatureItem feature="Leaderboard" icon="fa-ranking-star" />
                        <FeatureItem feature="Timer" icon="fa-hourglass-half" />
                        <FeatureItem feature="Percentage Result" icon="fa-star" />
                        <FeatureItem feature="Randomize questions" icon="fa-shuffle" />
                        <FeatureItem feature="Rewards" icon="fa-hand-holding-dollar" />
                        <FeatureItem feature="Challenge" icon="fa-shield-halved" />
                    </div>
                    <Link to="/">
                        <button className='text-green-100 border border-green-100 rounded-full py-3 px-6 font-medium my-6 transition-all hover:bg-green-100 hover:text-white'>Get started</button>
                    </Link>
                </main>
            </div>
        </div>
    )
}

function FeatureItem({feature, icon}){
    return (
        <div className='feature bg-white rounded-md p-10 flex items-center transition-all hover:bg-green-100 hover:text-white'>
            <div className='shrink-0 h-20 w-20 rounded-full transition-all flex items-center justify-center bg-green-100 text-white text-4xl'>
                <i className={`fa-solid ${icon}`}></i>
            </div>
            <p className='font-medium text-xl ml-4'>{feature}</p>
        </div>
    )
}

export default Features
