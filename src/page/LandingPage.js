import React, { useState } from 'react' 
import heroImage from '../assets/hero-image.png'
import SubjectsModal from '../component/SubjectsModal'
import Header from '../component/Header'
function LandingPage() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            {showModal && <SubjectsModal hideModal={()=>setShowModal(false)}/>}
            <div>
                <div className='container mx-auto'>
                    <div className='max-w-[1200px] mx-auto'>
                        <Header />
                        <main className='flex items-center'>
                            <article className='w-1/2 flex flex-col gap-10 pl-12'>
                                <h1 className='font-medium text-[37px]'>Learn <br/>new concepts <br/> for each question</h1>
                                <p className='text-[#828282] leading-5 border-l border-[#333333] pl-3'>We help you prepare for exams and quizes </p>
                                <div className='flex gap-7'>
                                    <button onClick={()=>setShowModal(true)} className='py-3 px-4 bg-green-100 text-sm font-medium text-white leading-5'>Start solving</button>
                                    <button className='flex items-center gap-1 text-green-100 text-sm leading-4'>
                                        <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className='fill-green-100' d="M4.40843 7.88428L1.14031 2.22373L7.67655 2.22373L4.40843 7.88428Z"/>
                                        </svg>
                                        <span>Know more</span>
                                    </button>
                                </div>
                            </article>
                            <div className='w-1/2'>
                                <img src={heroImage} className="w-[80%]"/>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage
