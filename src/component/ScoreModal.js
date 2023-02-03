import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore"; 
import db from '../firebaseconfig';
import { Context } from '../Context';


function ScoreModal({score}) {
    const {user, questions} = useContext(Context)
    const [averageScore, setAverageScore] = useState(null)
    useEffect(()=>{
        let avgScore = 0
        score.forEach(score => {
            avgScore += score.score
        });
        setAverageScore((avgScore / score.length).toFixed(1) * 10)
    },[])

    const scores = score.map((score, index) => {
        return (
            <div className='flex justify-between' key={index}>
                <p>{score.subject}:</p> 
                <p>{score.score * 10}%</p>
            </div>
        )
    })

    useEffect(()=>{
        const que = []
        questions.forEach(question => {
            if(question.subject.includes(':')){
                que.push(question.subject.split(': ')[1])
            } else {
                que.push(question.subject)
            }
        })
        
        const queString = que.toString().replaceAll(",", ", ")
        
        const saveScore = async() => { 
            try {
                const docRef = await addDoc(collection(db, "results"), {
                    name: user?.displayName,
                    topics: queString,
                    average: averageScore
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
        const saveHistory = async() => { 
            try {
                const docRef = await addDoc(collection(db, "users", "history", user.uid), {
                    date: new Date(),
                    topics: queString,
                    averageScore: averageScore
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }

        if(averageScore){
            console.log('Hi')
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
