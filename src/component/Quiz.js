import React from "react";
import '../assets/css/index.css'

export default function Quiz(){
    return(
        <main>
            <div>
                <h3 className="main--title">Quizzical</h3>
                <p className="main--description">Test your knowledge on sport</p>
                <button className="main-button">Start quiz</button>
            </div>
        </main>
    )
}
// https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple