import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../component/Header'
import { Context } from '../Context'

function Instructions() {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    
    //Check if user doesn't exist, and navigate to the login page
    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    },[])

    return (
        <div>
            <div className='container mx-auto px-4'>
                <Header />
                <main className='my-10'>
                    <h1 className="text-center text-3xl font-semibold">Quiz Instructions</h1>
                    <article>
                        <p className='my-4 leading-7'>The quizzes consists of questions carefully designed to help you self-assess your comprehension of the information presented on the topics covered in the module. No data will be collected on the website regarding your responses or how many times you take the quiz.</p>

                        <p className='my-4 leading-7'>Each question in the quiz is of multiple-choice format. Read each question carefully, and click on  your response that is based on the information covered on the topic in the module.</p>

                        <p className='my-4 leading-7'>After responding to a question, click on the "Next Question" button at the bottom to go to the next questino. After responding to the 10th question, click on "Submit" to go to the next quiz.</p>

                        <p className='my-4 leading-7'>When you click submit when taking the last quiz, it's going to pop your score on each individual and quiz and as well as your average score </p>

                        <p className='my-4 leading-7'>The total score for the quiz is based on your responses to all questions. If you respond incorrectly to a question your quiz score will reflect it appropriately. However, your quiz will not be graded, if you skip a question or exit before responding to all the questions.</p>
                    </article>
                    <Link to='/quiz'><button className='px-6 py-2 bg-green-100 text-sm text-white font-medium'>Start</button></Link>
                </main>
            </div>
        </div>
    )
}

export default Instructions
