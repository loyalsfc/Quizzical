import React, { useEffect, useState, useId, useRef, useContext } from 'react'
import ScoreModal from '../component/ScoreModal'
import QuestionTemplate from '../component/QuestionTemplate'
import { Context } from '../Context'

function QuizPage() {
    const {questions} = useContext(Context)
    const [answers, setAnswers] = useState({})
    const [totalAnswers, setTotalAnswers] = useState({})
    const [score, setScore] = useState([])
    const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [isComplete, setIsComplete] = useState(false)

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
        console.log(totalAnswers, questions)
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
            <QuestionTemplate 
                currentSubject={questions[currentSubjectIndex]}
                submitQuiz={getTotalScore} 
                setAnswers={setAnswers}
            />    
        </>

    )
}

export default QuizPage
