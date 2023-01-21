import React, { createContext, useEffect, useState } from 'react'
const Context = createContext()

function ContextProvider({children}) {
    const [categories, setCategories] = useState([
        {
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
        }
    ])
    const [selectCategories, setSelectedCategories] = useState([])
    const [questions, setQuestions] = useState([
        {
            "subject": "Geography",
            "question": [
                {
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What is the capital of the American state of Arizona?",
                    "correct_answer": "Phoenix",
                    "incorrect_answers": [
                        "Montgomery",
                        "Tallahassee",
                        "Raleigh",
                        "Phoenix"
                    ]
                },
                {
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What is the capital of Indonesia?",
                    "correct_answer": "Jakarta",
                    "incorrect_answers": [
                        "Bandung",
                        "Medan",
                        "Palembang"
                    ]
                },
                {
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Which of the following former Yugoslavian states is landlocked?",
                    "correct_answer": "Serbia",
                    "incorrect_answers": [
                        "Bosnia and Herzegovina",
                        "Montenegro",
                        "Croatia"
                    ]
                },
                {
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "How many time zones does China have?",
                    "correct_answer": "1",
                    "incorrect_answers": [
                        "3",
                        "4",
                        "2"
                    ]
                },
                {
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What is the official language of Costa Rica?",
                    "correct_answer": "Spanish",
                    "incorrect_answers": [
                        "English",
                        "Portuguese",
                        "Creole"
                    ]
                },
                {
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What country has a horizontal bicolor red and white flag?",
                    "correct_answer": "Monaco",
                    "incorrect_answers": [
                        "Bahrain",
                        "Malta",
                        "Liechenstein"
                    ]
                },
                {
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What is the nickname for the US state Delaware?",
                    "correct_answer": "The First State",
                    "incorrect_answers": [
                        "The Fiftieth State",
                        "The Second State",
                        "The Sixteenth State"
                    ]
                },
                {
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What is the name of the peninsula containing Spain and Portugal?",
                    "correct_answer": "Iberian Peninsula",
                    "incorrect_answers": [
                        "European Peninsula",
                        "Peloponnesian Peninsula",
                        "Scandinavian Peninsula"
                    ]
                },
                {
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What is the Polish city known to Germans as Danzig?",
                    "correct_answer": "Gdańsk",
                    "incorrect_answers": [
                        "Warsaw",
                        "Zakopane",
                        "Poznań"
                    ]
                },
                {
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What is the capital of India?",
                    "correct_answer": "New Delhi",
                    "incorrect_answers": [
                        "Bejing",
                        "Montreal",
                        "Tithi"
                    ]
                }
            ]
        },
        {
            "subject": "Entertainment: Board Games",
            "question": [
                {
                    "category": "Entertainment: Board Games",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Carcassonne is based on which French town?",
                    "correct_answer": "Carcassonne",
                    "incorrect_answers": [
                        "Paris",
                        "Marseille",
                        "Clermont-Ferrand"
                    ]
                },
                {
                    "category": "Entertainment: Board Games",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "In a standard game of Monopoly, what colour are the two cheapest properties?",
                    "correct_answer": "Brown",
                    "incorrect_answers": [
                        "Green",
                        "Yellow",
                        "Blue"
                    ]
                },
                {
                    "category": "Entertainment: Board Games",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "How many spaces are there on a standard Monopoly board?",
                    "correct_answer": "40",
                    "incorrect_answers": [
                        "28",
                        "55",
                        "36"
                    ]
                },
                {
                    "category": "Entertainment: Board Games",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "How many pieces are there on the board at the start of a game of chess?",
                    "correct_answer": "32",
                    "incorrect_answers": [
                        "16",
                        "20",
                        "36"
                    ]
                },
                {
                    "category": "Entertainment: Board Games",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "On a standard Monopoly board, which square is diagonally opposite &#039;Go&#039;? ",
                    "correct_answer": "Free Parking",
                    "incorrect_answers": [
                        "Go to Jail",
                        "Jail",
                        "The Electric Company"
                    ]
                },
                {
                    "category": "Entertainment: Board Games",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Which of these games includes the phrase &quot;Do not pass Go, do not collect $200&quot;?",
                    "correct_answer": "Monopoly",
                    "incorrect_answers": [
                        "Pay Day",
                        "Cluedo",
                        "Coppit"
                    ]
                },
                {
                    "category": "Entertainment: Board Games",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Which one of these is not a real game in the Dungeons &amp; Dragons series?",
                    "correct_answer": "Extreme Dungeons &amp; Dragons",
                    "incorrect_answers": [
                        "Advanced Dungeons &amp; Dragons",
                        "Dungeons &amp; Dragons 3.5th edition",
                        "Advanced Dungeons &amp; Dragons 2nd edition"
                    ]
                },
                {
                    "category": "Entertainment: Board Games",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "The board game Monopoly takes its street names from which real American city?",
                    "correct_answer": "Atlantic City, New Jersey",
                    "incorrect_answers": [
                        "Las Vegas, Nevada",
                        "Duluth, Minnesota",
                        "Charleston, South Carolina"
                    ]
                },
                {
                    "category": "Entertainment: Board Games",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "In which year was the pen and paper RPG &quot;Deadlands&quot; released?",
                    "correct_answer": "1996",
                    "incorrect_answers": [
                        "2003",
                        "1999",
                        "1993"
                    ]
                },
                {
                    "category": "Entertainment: Board Games",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "In board games, an additional or ammended rule that applies to a certain group or place is informally known as a &quot;what&quot; rule?",
                    "correct_answer": "House",
                    "incorrect_answers": [
                        "Custom",
                        "Extra",
                        "Change"
                    ]
                }
            ]
        },
        {
            "subject": "Mythology",
            "question": [
                {
                    "category": "Mythology",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "The ancient Roman god of war was commonly known as which of the following?",
                    "correct_answer": "Mars",
                    "incorrect_answers": [
                        "Jupiter",
                        "Juno",
                        "Ares"
                    ]
                },
                {
                    "category": "Mythology",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Who in Greek mythology, who led the Argonauts in search of the Golden Fleece?",
                    "correct_answer": "Jason",
                    "incorrect_answers": [
                        "Castor",
                        "Daedalus",
                        "Odysseus"
                    ]
                },
                {
                    "category": "Mythology",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "This Greek goddess&#039;s name was chosen for the dwarf planet responsible for discord on Pluto&#039;s classification amongst astronomers.",
                    "correct_answer": "Eris",
                    "incorrect_answers": [
                        "Charon",
                        "Ceres",
                        "Dysnomia"
                    ]
                },
                {
                    "category": "Mythology",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Who was the King of Gods in Ancient Greek mythology?",
                    "correct_answer": "Zeus",
                    "incorrect_answers": [
                        "Apollo",
                        "Hermes",
                        "Poseidon"
                    ]
                },
                {
                    "category": "Mythology",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "The greek god Poseidon was the god of what?",
                    "correct_answer": "The Sea",
                    "incorrect_answers": [
                        "War",
                        "Sun",
                        "Fire"
                    ]
                },
                {
                    "category": "Mythology",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
                    "correct_answer": "Orpheus",
                    "incorrect_answers": [
                        "Hercules",
                        "Perseus",
                        "Daedalus"
                    ]
                },
                {
                    "category": "Mythology",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "In Greek mythology, who is the god of wine?",
                    "correct_answer": "Dionysus",
                    "incorrect_answers": [
                        "Hephaestus",
                        "Demeter",
                        "Apollo"
                    ]
                },
                {
                    "category": "Mythology",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "In most traditions, who was the wife of Zeus?",
                    "correct_answer": "Hera",
                    "incorrect_answers": [
                        "Aphrodite",
                        "Athena",
                        "Hestia"
                    ]
                },
                {
                    "category": "Mythology",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What mytological creatures have women&#039;s faces and vultures&#039; bodies?",
                    "correct_answer": "Harpies",
                    "incorrect_answers": [
                        "Mermaids",
                        "Nymph",
                        "Lilith"
                    ]
                },
                {
                    "category": "Mythology",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "The Nike apparel and footwear brand takes it&#039;s name from the Greek goddess of what?",
                    "correct_answer": "Victory",
                    "incorrect_answers": [
                        "Courage",
                        "Strength",
                        "Honor"
                    ]
                }
            ]
        }
    ])

    // useEffect(()=>{
    //     fetch('https://opentdb.com/api_category.php')
    //     .then(res => res.json())
    //     .then(data => setCategories(data.trivia_categories))
    // },[])

    function fetchQuestions(){
    //     let fetchedQuestion = []
    //     selectCategories.forEach(cat => {
    //         fetch(`https://opentdb.com/api.php?amount=10&category=${cat.id}&difficulty=easy&type=multiple`)
    //         .then(res =>res.json())
    //         .then(data => fetchedQuestion.push({subject: cat.name, question: data.results}))
    //     });
    //     setQuestions(fetchedQuestion)
    }

    return (
        <Context.Provider value={{categories, selectCategories, setSelectedCategories, questions, fetchQuestions}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
