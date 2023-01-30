import React, { useEffect, useState,useContext } from 'react'
import ScoreModal from '../component/ScoreModal'
import QuestionTemplate from '../component/QuestionTemplate'
import { Context } from '../Context'
import { Link } from 'react-router-dom'

function QuizPage() {
    const {questions} = useContext(Context)
    const [answers, setAnswers] = useState({})
    const [totalAnswers, setTotalAnswers] = useState({})
    const [score, setScore] = useState([])
    const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [isComplete, setIsComplete] = useState(false)

    console.log(questions)

    function getTotalScore(intervalId){
        setTotalAnswers({...totalAnswers, [questions[currentSubjectIndex].subject]: answers})
        if(currentSubjectIndex === questions.length - 1){
            setIsComplete(true)
            clearInterval(intervalId)
        } else {
            setCurrentSubjectIndex(currentSubjectIndex + 1)
            setAnswers([])
        }
    }

    useEffect(()=>{
        if(currentSubjectIndex === questions.length - 1){
            let calculatedScore = []
            questions.forEach(que=> {
                let initialScore = 0
                const {subject, question: subjectQuestions} = que
                const subjectAnswers = totalAnswers[subject]
                subjectQuestions.forEach((item, index)=>{
                    const {question, correct_answer} = item
                    if(subjectAnswers[question] === correct_answer){
                        initialScore++
                    }
                })
                calculatedScore.push({subject: subject, score: initialScore})
            });
            setScore(calculatedScore)
            setShowModal(true)
        }
    }, [isComplete])
    
    return(
        <>
            {showModal && <ScoreModal score={score} />}
            {questions.length > 0 ? (
                <QuestionTemplate 
                    currentSubject={questions[currentSubjectIndex]}
                    submitQuiz={getTotalScore} 
                    setAnswers={setAnswers}
                />
                ):(
                    <div className='p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <h3 className='text-center font-medium mb-3'>No Question Selected</h3>
                        <button className='bg-green-100 text-white rounded block mx-auto'><Link to='/' className='py-2 px-4 block'>Return Home</Link></button>
                    </div>
                )
            }    
        </>

    )
}

export default QuizPage
