import React from 'react'
import '../assets/css/index.css'

export default function QuestionPage(){

    const [allQuestions, setAllQuestions] = React.useState({
        questions: [],
        isDataLoaded: false
    })

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple")
        .then(res => res.json())
        .then(data => setAllQuestions({questions: data.results, isDataLoaded: true}))        
    }, [])

    
    
    // const question = allQuestions.map(items, ()=>{
    //         return(
    //             <Question question={items.question} />
    //         )
    //     });
    
    

    return(
        <section>
            Question page noni
            {/* {question} */}
        </section>
    )
}

function Question(props){
    return(
        <p className='question'>{props.question}</p>
    )
}