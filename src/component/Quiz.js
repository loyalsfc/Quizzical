import React, {useState} from "react";
// import '../assets/css/index.css'

export default function Quiz(){
    const [showQuestions, setShowQuestions] = React.useState(false);
    const [answers, setAnswers] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = React.useState([
    {
        "category":"Science: Mathematics",
        "type":"multiple",
        "difficulty":"easy",
        "question":"In Roman Numerals, what does XL equate to?",
        "correct_answer":"40",
        "incorrect_answers":["60","15","90"]
    },
    {
            
        "category":"Science: Mathematics",
        "type":"multiple",
        "difficulty":"easy",
        "question":"What prime number comes next after 19?",
        "correct_answer":"23",
        "incorrect_answers":["25","21","27"]
    },
    {
        "category":"Science: Mathematics",
        "type":"multiple",
        "difficulty":"easy",
        "question":"D in Bodmas stands for",
        "correct_answer":"/",
        "incorrect_answers":["*","-","+"]
    },
    {
        "category":"Science: Mathematics",
        "type":"multiple",
        "difficulty":"easy",
        "question":"How many sides does a heptagon have?",
        "correct_answer":"7",
        "incorrect_answers":["8","6","5"]
    },
    {
        "category":"Science: Mathematics",
        "type":"multiple",
        "difficulty":"easy",
        "question":"Which of this is a prime number?",
        "correct_answer":"7",
        "incorrect_answers":["4","9","16"]
    }
]);

    function startQuiz(){
        setShowQuestions(prevState => !prevState)
    }

    // React.useEffect(() => {
    //     fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple")
    //     .then(res => res.json())
    //     .then(data => setQuestions(data.results))
    // },[])

    function Welcome(){
        return (<div className="welcome-page">
            <div>
                <h3 className="main--title">Quizzical</h3>
                <p className="main--description">Test your knowledge on sport</p>
                <button className="main-button underline" onClick={startQuiz}>Start quiz</button>
            </div>
        </div>
        )
    }

    function selected(e){
        const { name, value } = e.target
        setAnswers({...answers, [name]: value})
        // const question = e.target.attributes['data-question'].value
        // document.querySelectorAll(`.question-${question}`).forEach(item=>{
        //     item.classList.remove('clicked')
        // })
        // e.currentTarget.classList.add('clicked')
    }

    function handleNextClick(){
        setCurrentQuestion(currentQuestion + 1);
    }
    
    let questionsList = questions.map((item, index) => {
        if(!item.incorrect_answers.includes(item.correct_answer)){             
            item.incorrect_answers.splice(Math.floor(Math.random() * 4), 0, item.correct_answer)
        } 
        let options = item.incorrect_answers.map((option, optionIndex) => {
            return(
                    <div key={"Opt" + optionIndex} className="options-wrapper">
                        <input type="radio" name={`question-${index}`} id={`option-${index}-${optionIndex}`} />
                        <label  
                            className={`question--option question-${index}`}
                            onClick={selected}
                            htmlFor={`option-${index}-${optionIndex}`}
                            data-question={index}
                        >
                            {option}
                        </label>
                    </div>
                    )
        })
        return(
            <>
                <QuestionList 
                    key={"Que" + index} 
                    question={item.question} 
                    choice={options}
                />
            </>
        )  
    })
    
    function QuestionList(props){
        return(
            <div className="question--container">
                <p className="question">{props.question}</p>
                {props.choice}
            </div>
        )
    }

    // function showAnswer(){
    //     document.querySelectorAll('checke')
    // }

    return(
        <main>
            {!showQuestions ? <Welcome /> : questionsList}
        
            {showQuestions && <button className="checkAnswer" >Check Answer</button>}
        </main>
    )
}