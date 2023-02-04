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

    //Saving the topic answer when user submit
    function getTotalScore(intervalId){
        //Update the total answers state with the subject as key and answer array as value object
        setTotalAnswers({...totalAnswers, [questions[currentSubjectIndex].subject]: answers})
        //Check if currentSubjectIndex matches the number of subject
        if(currentSubjectIndex === questions.length - 1){
            //if currectSubjectIndex matches the number of subjects question
            //Update the isComplete state to true
            setIsComplete(true)
            //Stop the counting
            clearInterval(intervalId)
        } else {
            //if currectSubjectIndex is not up to the number of subjects question
            //Update currentSubjectIndex state to the next value
            setCurrentSubjectIndex(currentSubjectIndex + 1)
            // set the answers array to empty to accomodate new answers 
            setAnswers([])
        }
    }

    useEffect(()=>{
        //Perform final submission when isComplete is true
        if(currentSubjectIndex === questions.length - 1){
            //Initialize an empty array to hold calculate score
            let calculatedScore = []
            // Looping through the questions to match get each topics correct answers 
            questions.forEach(que=> {
                let initialScore = 0
                //Get the correct topic and it's questions
                const {subject, question: subjectQuestions} = que
                //Get the users answers for for the current topic
                const subjectAnswers = totalAnswers[subject]
                //Loop through topic questions
                subjectQuestions.forEach((item, index)=>{
                    //Get the question and the correct answer from each questions
                    const {question, correct_answer} = item
                    //Compare if the correct answer for the question matches the user selected answer
                    if(subjectAnswers[question] === correct_answer){
                        //Increment the initial score if it matches 
                        initialScore++
                    }
                })
                //Once the question loop completed push the topic and user score to the calculatedScore array
                calculatedScore.push({subject: subject, score: initialScore})
            });
            // Once all question is completed, update the score State to the calculatedScore array 
            setScore(calculatedScore)
            //Show the result modal
            setShowModal(true)
        }
    }, [isComplete])
    
    return(
        <>
            {showModal && <ScoreModal score={score} />}
            {//Check if the questions length is not zero
            //if it's greater than zero, display the question
            questions.length > 0 ? (
                <QuestionTemplate 
                    currentSubject={questions[currentSubjectIndex]}
                    submitQuiz={getTotalScore} 
                    setAnswers={setAnswers}
                />
                ):(
                    //Otherwise display no question selected
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
