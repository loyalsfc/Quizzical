import React from 'react'
import logo from '../assets/logo.png'
import heroImage from '../assets/hero-image.png'
import SubjectsModal from '../component/SubjectsModal'

function LandingPage() {
    return (
        <>
            <SubjectsModal />
            <div>
                <div className='container mx-auto'>
                    <header className='flex justify-between items-center pt-9 pb-5 border-b border-b-grey-100'>
                        <img src={logo} />
                        <nav>
                            <ul className='flex  gap-6 items-center text-grey-100'>
                                <li className='cursor-pointer'>How it works?</li>
                                <li className='cursor-pointer'>Features</li>
                                <li className='cursor-pointer'>About Us</li>
                                <li className='cursor-pointer flex items-center text-green-100'>
                                    <svg className='mr-2' width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.19878 16.4067C0.543528 12.8479 3.08021 10.797 4.57264 9.86288C1.60252 6.87452 2.96059 2.87885 4.57264 1.54341C6.44837 -0.0104475 9.80586 -0.716307 11.9981 1.9531C14.7051 5.24942 13.1265 8.54488 11.9981 9.86288C12.7261 10.5038 15.2288 12.1698 15.5958 15.5941C16.0588 19.9146 2.01785 20.8552 1.19878 16.4067Z" fill="#31CD63"/>
                                        <path d="M1.19878 16.4067C0.543528 12.8479 3.08021 10.797 4.57264 9.86288C1.60252 6.87452 2.96059 2.87885 4.57264 1.54341C6.44837 -0.0104475 9.80586 -0.716307 11.9981 1.9531C14.7051 5.24942 13.1265 8.54488 11.9981 9.86288C12.7261 10.5038 15.2288 12.1698 15.5958 15.5941C16.0588 19.9146 2.01785 20.8552 1.19878 16.4067Z" stroke="#31CD63" stroke-width="0.29551"/>
                                    </svg>
                                    <span className='mr-1'>Olumide</span>
                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.69796 5.67727C3.54975 5.67652 3.40356 5.64279 3.27 5.57852C3.13644 5.51426 3.01887 5.42106 2.9258 5.30571L0.481607 2.3448C0.338784 2.16655 0.248907 1.95176 0.222219 1.72491C0.195531 1.49806 0.233104 1.26828 0.330659 1.06175C0.409779 0.882249 0.538894 0.72932 0.702583 0.621223C0.866272 0.513127 1.05762 0.454432 1.25376 0.452148H6.14216C6.3383 0.454432 6.52965 0.513127 6.69334 0.621223C6.85703 0.72932 6.98614 0.882249 7.06526 1.06175C7.16282 1.26828 7.20039 1.49806 7.1737 1.72491C7.14701 1.95176 7.05714 2.16655 6.91431 2.3448L4.47012 5.30571C4.37705 5.42106 4.25948 5.51426 4.12592 5.57852C3.99236 5.64279 3.84617 5.67652 3.69796 5.67727Z" fill="#31CD63"/>
                                    </svg>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <main className='flex items-center'>
                        <article className='w-1/2 flex flex-col gap-10 pl-12'>
                            <h1 className='font-medium text-[37px]'>Learn <br/>new concepts <br/> for each question</h1>
                            <p className='text-[#828282] leading-5 border-l border-[#333333] pl-3'>We help you prepare for exams and quizes </p>
                            <div className='flex gap-7'>
                                <button className='py-3 px-4 bg-green-100 text-sm font-medium text-white leading-5'>Start solving</button>
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
        </>
    )
}

export default LandingPage
