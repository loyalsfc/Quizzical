import React, { createContext, useEffect, useState } from 'react'
const Context = createContext()

function ContextProvider({children}) {
    const [categories, setCategories] = useState([
        
    ])
    const [selectCategories, setSelectedCategories] = useState([])
    const [questions, setQuestions] = useState([
       
    ])
    const [user, setUser] = useState(null)

    useEffect(()=>{
        if(localStorage.auth){
            setUser(JSON.parse(localStorage.getItem('auth')))
        }
    },[])

    console.log(user)

    useEffect(()=>{
        fetch('https://opentdb.com/api_category.php')
        .then(res => res.json())
        .then(data => setCategories(data.trivia_categories))
    },[])

    function fetchQuestions(){
        let fetchedQuestion = []
        selectCategories.forEach(cat => {
            fetch(`https://opentdb.com/api.php?amount=10&category=${cat.id}&difficulty=easy&type=multiple`)
            .then(res =>res.json())
            .then(data => fetchedQuestion.push({subject: cat.name, question: data.results}))
        });
        setQuestions(fetchedQuestion)
    }

    return (
        <Context.Provider value={{categories, selectCategories, setSelectedCategories, questions, fetchQuestions, setUser, user}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
