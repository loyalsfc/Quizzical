import React, { useContext, useState } from 'react' 
import { useNavigate } from 'react-router-dom'
import heroImage from '../assets/hero-image.png'
import Header from '../component/Header'
import SubjectsModal from '../component/SubjectsModal'
import { Context } from '../Context'

function LandingPage() {
    const [showModal, setShowModal] = useState(false)
    const {user} = useContext(Context);
    const navigate = useNavigate()

    const handleClick = () => {
        //Check if user is sign in
        if(user){
            //If user sign in, show the topic selection page
            setShowModal(true)
        } else {
            //If not, redirect to login page
            navigate('/login')
        }
    }

    return (
        <>
            {showModal && <SubjectsModal hideModal={()=>setShowModal(false)}/>}
            <div className='container mx-auto px-4'>
                <div className='max-w-[1200px]  mx-auto h-screen flex flex-col'>
                    <Header />
                    <main className='flex flex-col md:flex-row pt-8 md:pt-0 items-center h-full'>
                        <article className='w-full md:w-1/2 flex flex-col gap-10 md:pl-12'>
                                <h1 className='font-medium text-[37px]'>Learn <br className='hidden md:inline'/>new concepts <br className='hidden md:inline'/> for each question</h1>
                                <p className='text-[#828282] leading-5 border-l border-[#333333] pl-3'>We help you prepare for exams and quizes </p>
                                <div className='flex gap-7'>
                                    <button onClick={handleClick} className='py-3 px-4 bg-green-100 text-sm font-medium text-white leading-5'>Start solving</button>
                                    <button className='flex items-center gap-1 text-green-100 text-sm leading-4'>
                                        <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className='fill-green-100' d="M4.40843 7.88428L1.14031 2.22373L7.67655 2.22373L4.40843 7.88428Z"/>
                                        </svg>
                                        <span>Know more</span>
                                    </button>
                                </div>
                        </article>
                        <div className='w-full md:w-1/2'>
                            <img src={heroImage} className="w-full md:w-4/5"/>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default LandingPage
