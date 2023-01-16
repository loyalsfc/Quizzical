import React, { createContext, useEffect, useState } from 'react'
const Context = createContext()

function ContextProvider({children}) {
    const [categories, setCategories] = useState({
        "id": 9,
        "name": "General Knowledge"
        },
        {
        "id": 10,
        "name": "Entertainment: Books"
        },
        {
        "id": 11,
        "name": "Entertainment: Film"
        },
        {
        "id": 12,
        "name": "Entertainment: Music"
        },
        {
        "id": 13,
        "name": "Entertainment: Musicals & Theatres"
        },
        {
        "id": 14,
        "name": "Entertainment: Television"
        },
        {
        "id": 15,
        "name": "Entertainment: Video Games"
        },
        {
        "id": 16,
        "name": "Entertainment: Board Games"
        },
        {
        "id": 17,
        "name": "Science & Nature"
        },
        {
        "id": 18,
        "name": "Science: Computers"
        },
        {
        "id": 19,
        "name": "Science: Mathematics"
        },
        {
        "id": 20,
        "name": "Mythology"
        },
        {
        "id": 21,
        "name": "Sports"
        },
        {
        "id": 22,
        "name": "Geography"
        },
        {
        "id": 23,
        "name": "History"
        },
        {
        "id": 24,
        "name": "Politics"
        },
        {
        "id": 25,
        "name": "Art"
        },
        {
        "id": 26,
        "name": "Celebrities"
        },
        {
        "id": 27,
        "name": "Animals"
        },
        {
        "id": 28,
        "name": "Vehicles"
        },
        {
        "id": 29,
        "name": "Entertainment: Comics"
        },
        {
        "id": 30,
        "name": "Science: Gadgets"
        },
        {
        "id": 31,
        "name": "Entertainment: Japanese Anime & Manga"
        },
        {
        "id": 32,
        "name": "Entertainment: Cartoon & Animations"
        })
    const [selectCategories, setSelectedCategories] = useState([])
    const [questions, setQuestions] = useState([
        {
            "subject": "General Knowledge",
            "question": [
                {
                    "category": "General Knowledge",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
                    "correct_answer": "Richard Branson",
                    "incorrect_answers": [
                        "Alan Sugar",
                        "Donald Trump",
                        "Bill Gates"
                    ]
                },
                {
                    "category": "General Knowledge",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What is the first book of the Old Testament?",
                    "correct_answer": "Genesis",
                    "incorrect_answers": [
                        "Exodus",
                        "Leviticus",
                        "Numbers"
                    ]
                },
                {
                    "category": "General Knowledge",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What is the French word for &quot;hat&quot;?",
                    "correct_answer": "Chapeau",
                    "incorrect_answers": [
                        "Bonnet",
                        " &Eacute;charpe",
                        " Casque"
                    ]
                },
                {
                    "category": "General Knowledge",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Which one of these is not a typical European sword design?",
                    "correct_answer": "Scimitar",
                    "incorrect_answers": [
                        "Falchion",
                        "Ulfberht",
                        "Flamberge"
                    ]
                },
                {
                    "category": "General Knowledge",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Which restaurant&#039;s mascot is a clown?",
                    "correct_answer": "McDonald&#039;s",
                    "incorrect_answers": [
                        "Whataburger",
                        "Burger King",
                        "Sonic"
                    ]
                },
                {
                    "category": "General Knowledge",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Which of the following presidents is not on Mount Rushmore?",
                    "correct_answer": "John F. Kennedy",
                    "incorrect_answers": [
                        "Theodore Roosevelt",
                        "Abraham Lincoln",
                        "Thomas Jefferson"
                    ]
                },
                {
                    "category": "General Knowledge",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What is the Zodiac symbol for Gemini?",
                    "correct_answer": "Twins",
                    "incorrect_answers": [
                        "Fish",
                        "Scales",
                        "Maiden"
                    ]
                },
                {
                    "category": "General Knowledge",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What is Cynophobia the fear of?",
                    "correct_answer": "Dogs",
                    "incorrect_answers": [
                        "Birds",
                        "Flying",
                        "Germs"
                    ]
                },
                {
                    "category": "General Knowledge",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Who is the author of Jurrasic Park?",
                    "correct_answer": "Michael Crichton",
                    "incorrect_answers": [
                        "Peter Benchley",
                        "Chuck Paluhniuk",
                        "Irvine Welsh"
                    ]
                },
                {
                    "category": "General Knowledge",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Which of the following is not an Ivy League University?",
                    "correct_answer": "Stanford",
                    "incorrect_answers": [
                        "University of Pennsylvania",
                        "Harvard",
                        "Princeton"
                    ]
                }
            ]
        },
        {
            "subject": "Sports",
            "question": [
                {
                    "category": "Sports",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Which of the following sports is not part of the triathlon?",
                    "correct_answer": "Horse-Riding",
                    "incorrect_answers": [
                        "Cycling",
                        "Swimming",
                        "Running"
                    ]
                },
                {
                    "category": "Sports",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "The Rio 2016 Summer Olympics held it&#039;s closing ceremony on what date?",
                    "correct_answer": "August 21",
                    "incorrect_answers": [
                        "August 23",
                        "August 19",
                        "August 17"
                    ]
                },
                {
                    "category": "Sports",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What year did the New Orleans Saints win the Super Bowl?",
                    "correct_answer": "2010",
                    "incorrect_answers": [
                        "2008",
                        "2009",
                        "2011"
                    ]
                },
                {
                    "category": "Sports",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.",
                    "correct_answer": "Don Cherry",
                    "incorrect_answers": [
                        "Don McKellar",
                        "Don Taylor ",
                        "Donald Sutherland"
                    ]
                },
                {
                    "category": "Sports",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What is the most common type of pitch thrown by pitchers in baseball?",
                    "correct_answer": "Fastball",
                    "incorrect_answers": [
                        "Slowball",
                        "Screwball",
                        "Palmball"
                    ]
                },
                {
                    "category": "Sports",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "In bowling, what is the term used for getting three consecutive strikes?",
                    "correct_answer": "Turkey",
                    "incorrect_answers": [
                        "Flamingo",
                        "Birdie",
                        "Eagle"
                    ]
                },
                {
                    "category": "Sports",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Who won the premier league title in the 2015-2016 season following a fairy tale run?",
                    "correct_answer": "Leicester City",
                    "incorrect_answers": [
                        "Tottenham Hotspur",
                        "Watford",
                        "Stoke City"
                    ]
                },
                {
                    "category": "Sports",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "When was the FC Schalke 04 founded?",
                    "correct_answer": "1904",
                    "incorrect_answers": [
                        "1909",
                        "2008",
                        "1999"
                    ]
                },
                {
                    "category": "Sports",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "&quot;Stadium of Light&quot; is the home stadium for which soccer team?",
                    "correct_answer": "Sunderland FC",
                    "incorrect_answers": [
                        "Barcelona FC",
                        "Paris Saints-Germain",
                        "Manchester United"
                    ]
                },
                {
                    "category": "Sports",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Which country will host the 2022 FIFA World Cup?",
                    "correct_answer": "Qatar",
                    "incorrect_answers": [
                        "USA",
                        "Japan",
                        "Switzerland"
                    ]
                }
            ]
        },
        {
            "subject": "Science: Computers",
            "question": [
                {
                    "category": "Science: Computers",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "When Gmail first launched, how much storage did it provide for your email?",
                    "correct_answer": "1GB",
                    "incorrect_answers": [
                        "512MB",
                        "5GB",
                        "Unlimited"
                    ]
                },
                {
                    "category": "Science: Computers",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
                    "correct_answer": "Final",
                    "incorrect_answers": [
                        "Static",
                        "Private",
                        "Public"
                    ]
                },
                {
                    "category": "Science: Computers",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
                    "correct_answer": "Binary",
                    "incorrect_answers": [
                        "JavaScript",
                        "C++",
                        "Python"
                    ]
                },
                {
                    "category": "Science: Computers",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "In web design, what does CSS stand for?",
                    "correct_answer": "Cascading Style Sheet",
                    "incorrect_answers": [
                        "Counter Strike: Source",
                        "Corrective Style Sheet",
                        "Computer Style Sheet"
                    ]
                },
                {
                    "category": "Science: Computers",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What is the code name for the mobile operating system Android 7.0?",
                    "correct_answer": "Nougat",
                    "incorrect_answers": [
                        "Ice Cream Sandwich",
                        "Jelly Bean",
                        "Marshmallow"
                    ]
                },
                {
                    "category": "Science: Computers",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What is the domain name for the country Tuvalu?",
                    "correct_answer": ".tv",
                    "incorrect_answers": [
                        ".tu",
                        ".tt",
                        ".tl"
                    ]
                },
                {
                    "category": "Science: Computers",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Which programming language shares its name with an island in Indonesia?",
                    "correct_answer": "Java",
                    "incorrect_answers": [
                        "Python",
                        "C",
                        "Jakarta"
                    ]
                },
                {
                    "category": "Science: Computers",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "How long is an IPv6 address?",
                    "correct_answer": "128 bits",
                    "incorrect_answers": [
                        "32 bits",
                        "64 bits",
                        "128 bytes"
                    ]
                },
                {
                    "category": "Science: Computers",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "In computing, what does LAN stand for?",
                    "correct_answer": "Local Area Network",
                    "incorrect_answers": [
                        "Long Antenna Node",
                        "Light Access Node",
                        "Land Address Navigation"
                    ]
                },
                {
                    "category": "Science: Computers",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What language does Node.js use?",
                    "correct_answer": "JavaScript",
                    "incorrect_answers": [
                        "Java",
                        "Java Source",
                        "Joomla Source Code"
                    ]
                }
            ]
        }
    ])


    useEffect(()=>{
        fetch('https://opentdb.com/api_category.php')
        .then(res => res.json())
        .then(data => setCategories(data.trivia_categories))
    },[])

    function fetchQuestions(){
        let fetchedQuestion = []
        selectCategories.forEach(cat => {
            // fetch(`https://opentdb.com/api.php?amount=10&category=${cat.id}&difficulty=easy&type=multiple`)
            // .then(res =>res.json())
            // .then(data => fetchedQuestion.push({subject: cat.name, question: data.results}))
        });
        // setQuestions(fetchedQuestion)
    }

    return (
        <Context.Provider value={{categories, selectCategories, setSelectedCategories, questions, fetchQuestions}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
