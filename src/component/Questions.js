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

    console.log(allQuestions.questions)
    
    // const question = allQuestions.map(item, ()=>{
    //         return(
    //             <Question question={item.question} />
    //         )
    // });
    
    

    return(
        <section>
            Question page noni
            {/* {allQuestions.isDataLoaded && question} */}
        </section>
    )
}

function Question(props){
    return(
        <p className='question'>{props.question}</p>
    )
}