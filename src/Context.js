import React, { createContext, useEffect, useState } from 'react'
const Context = createContext()

function ContextProvider({children}) {
    const [categories, setCategories] = useState([])
    const [selectCategories, setSelectedCategories] = useState([])
    const [questions, setQuestions] = useState([])

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
        <Context.Provider value={{categories, selectCategories, setSelectedCategories, questions, fetchQuestions}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
