import React, { useEffect, useState, useId, useRef, useContext } from 'react'
import ScoreModal from '../component/ScoreModal'
import QuestionTemplate from '../component/QuestionTemplate'
import { Context } from '../Context'

function QuizPage() {
    const {questions} = useContext(Context)
    const [answers, setAnswers] = useState({})
    const [totalAnswers, setTotalAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0)
    const [showModal, setShowModal] = useState(false)

    // console.log(totalAnswers)
    function getTotalScore(){
        setTotalAnswers([...totalAnswers, {[questions[currentSubjectIndex].subject]: answers}])
        if(currentSubjectIndex === questions.length - 1){
            let initialScore = 0
            questions.forEach(question => {
                const que = question.question
                console.log(que, totalAnswers)
                if(question.correct_answer === answers[que]){
                    initialScore++
                }
            });
            setScore(initialScore)
            setShowModal(true)
        } else {
            setCurrentSubjectIndex(currentSubjectIndex + 1)
        }
    }
    
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
