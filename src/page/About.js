import React from 'react'
import Header from '../component/Header'

function About() {
    return (
        <div>
            <div className='container mx-auto px-4'>
                <Header />
            </div>
            <div className='-mt-[1px] pt-12 bg pb-20 overflow-hidden relative before:content_[""] before:absolute before:top-0 before:left-0 before:bg-green-100 before:h-full before:w-full before:rounded-[0_0_50%_0] before:scale-x-150  before:-z-10'>
                <h1 className='text-center font-bold text-5xl text-white'>About Quizzical</h1>
            </div>
            <article className='max-w-3xl mx-4 md:mx-auto bg-white p-8 rounded-lg text-sm leading-6 -mt-16 mb-10'>
                <h3 className='text-green-100 text-xl font-medium mb-2'>WHO WE ARE</h3>
                <p>At Quizzical, we're passionate about making learning fun and engaging. Our quiz app is designed to challenge your knowledge and help you expand your understanding of a wide range of subjects, from history and geography to entertainment and science.</p>

                <h3 className='text-green-100 text-xl font-medium mt-3 mb-2'>WE'RE DIFFERENT THAN THE REST</h3>
                <p>With thousands of quizzes covering a diverse range of topics, our app is the perfect tool for anyone looking to test their knowledge and improve their understanding. Whether you're a student, a lifelong learner, or just someone looking to pass the time, our app has something for everyone.</p>

                <p>Our quizzes are designed by experts in their fields and are constantly updated to ensure that you're always learning the latest information. And with a user-friendly interface and intuitive navigation, it's never been easier to get started.</p>

                <p>So why wait? Sign up today and start exploring the world of knowledge!</p>
            </article>
        </div>
    )
}

export default About
