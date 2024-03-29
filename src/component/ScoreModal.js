import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore"; 
import db from '../firebaseconfig';
import { Context } from '../Context';


function ScoreModal({score}) {
    const {user, questions} = useContext(Context)
    const [averageScore, setAverageScore] = useState(null)

    useEffect(()=>{
        //Calculate the average score of user
        let avgScore = 0
        //Loop through users scores on each questions topics 
        //Add everything together
        score.forEach(score => {
            avgScore += score.score
        });
        //Update the averageScore state by getting totalScore and divide by number of topics
        //Multiply by 10 get the percentage of the average score
        setAverageScore((avgScore / score.length).toFixed(1) * 10)
    },[])

    //Display score of each topic on the Score modal
    const scores = score.map((score, index) => {
        return (
            <div className='flex justify-between' key={index}>
                <p>{score.subject}:</p> 
                <p>{score.score * 10}%</p>
            </div>
        )
    })

    useEffect(()=>{
        //Saving user result to the database

        //Loop through the question and save the topic in an array
        const que = []
        questions.forEach(question => {
            if(question.subject.includes(':')){
                //Check if the topic has a prefix and remove the prefix
                //Topics with prefix has : which can be used to split it
                que.push(question.subject.split(': ')[1])
            } else {
                que.push(question.subject)
            }
        })
        
        //Convert the array of topics to string
        const queString = que.toString().replaceAll(",", ", ")
        
        //Saving score to results database to show in leaderboard
        const saveScore = async() => { 
            try {
                const docRef = await addDoc(collection(db, "results"), {
                    name: user?.displayName,
                    topics: queString,
                    average: averageScore
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }

        //Saving result to the user's personal database to show in user history
        const saveHistory = async() => { 
            try {
                const docRef = await addDoc(collection(db, "users", "history", user.uid), {
                    date: new Date(),
                    topics: queString,
                    averageScore: averageScore
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }

        //Check if average score is not null and run the save functions
        if(averageScore != null){
            saveScore()
            saveHistory()
        }
    }, [averageScore])

    return (
        <div className='h-screen w-full bg-black/[0.5] flex items-center justify-center fixed top-0 left-0 z-50'>
            <div className='h-[70%] w-[95%] md:w-[70%] bg-white grid grid-cols-1 md:grid-cols-3 justify-items-center content-center relative place-content-end'>
                <div />
                <div className='h-[22rem] w-[22rem] text-white rounded-full bg-green-100 flex flex-col items-center justify-center'>
                    <h4 className='text-3xl text-center mb-2'>Your scores</h4>
                    <div className='font-medium w-full flex flex-col gap-2 px-4'>
                        {scores}
                    </div>
                    <p className='mt-4 text-lg'>Average Score: {averageScore}%</p>
                </div>
                <Link to="/" className='self-end'><button className='right-10 bg-green-100 mt-4 font-medium leading-5 px-6 py-3 shadow text-white'>Continue</button></Link>
            </div>
        </div>
    )
}

export default ScoreModal
