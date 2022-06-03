import React from "react";
import '../assets/css/index.css'
import QuestionPage from "./Questions";

export default function Quiz(){
    const [questionPage, setQuestionPage] = React.useState(false)

    function startQuiz(){
        setQuestionPage(prevState => !prevState)
    }

    function Welcome(){
        return (<div className="welcome-page">
            <div>
                <h3 className="main--title">Quizzical</h3>
                <p className="main--description">Test your knowledge on sport</p>
                <button className="main-button" onClick={startQuiz}>Start quiz</button>
            </div>
        </div>
        )
    }

    return(
        <main>
            {!questionPage ? <Welcome /> : <QuestionPage />}
        </main>
    )
}

// https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple