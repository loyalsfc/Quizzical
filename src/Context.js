import { onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from './firebaseconfig'
const Context = createContext()

function ContextProvider({children}) {
    const [categories, setCategories] = useState([])
    const [selectCategories, setSelectedCategories] = useState([])
    const [questions, setQuestions] = useState([])
    const [user, setUser] = useState(null)

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setUser(user)
            }
        });
    },[])

    useEffect(()=>{
        // Fetch topics from the api endpoint 
        fetch('https://opentdb.com/api_category.php')
        .then(res => res.json())
        .then(data => setCategories(data.trivia_categories))
    },[])

    function fetchQuestions(){
        //initialize an empty array for questions
        let fetchedQuestion = []
        // loop through all the selected topics and fetch questions for each topics 
        selectCategories.forEach(cat => {
            fetch(`https://opentdb.com/api.php?amount=10&category=${cat.id}&difficulty=easy&type=multiple`)
            .then(res =>res.json())
            .then(data => fetchedQuestion.push({subject: cat.name, question: data.results}))
        });
        //Update the questions state to the fetched questions
        setQuestions(fetchedQuestion)
    }

    return (
        <Context.Provider value={{categories, selectCategories, setSelectedCategories, questions, fetchQuestions, setUser, user}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
