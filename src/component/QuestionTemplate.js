import React, {useState, useRef, useEffect} from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function QuestionTemplate({currentSubject, submitQuiz, setAnswers}) {
    const {subject, question: questions} = currentSubject
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const alphOptions = ['A', 'B', 'C', 'D']
    const [duration, setDuration] = useState(100)
    const nextBtn = useRef()
    const [intervalId, setIntervalId] = useState()
    const [showModal, setShowModal] = useState(true)

    useEffect(()=>{
        //Calculating the time duration remaining once the start modal is dismissed
        if(!showModal){
            const interval = setInterval(()=>{
                setDuration(prevValue => {
                    if(prevValue > 0){
                        return prevValue - 1
                    } 
                    return prevValue
                })
            },1000)
            //Getting the interval Id to stop countdown once user clicks on submit
            setIntervalId(interval)
            return () => clearInterval(interval)
        }
    },[showModal])

    useEffect(()=>{
        // Check if duration is zero, if yes, automatically submit quiz
        if(duration === 0){
            submitQuiz(intervalId)
        }
    },[duration])

    useEffect(()=>{
        //Once user start a new topic
        //setting question count to 0
        setCurrentQuestion(0)
        //Setting duration to 100 to coundown
        setDuration(100)
        //Display
        setShowModal(true)
        //Bugs in API that makes some topics return empty question.
        //In that case, submit action is performed for user to move to the next question 
        if(questions.length === 0){
            submitQuiz(intervalId)
        }
    },[currentSubject])

    function nextQuestion(){
        //Setting the current question display to user
        setCurrentQuestion(prevValue => prevValue + 1)
    }

    function selectiOption(event){
        const {name, value} = event.target
        //Saving the user's answer to the answer object 
        //Questions serve as property while the answer serve as value in the object
        setAnswers(prevAnswers => {
            return {...prevAnswers, [name]: value}
        })
    }

    function markOption(event){
        //Physical representation of the option the user selected
        //Remove the green active background on every question option 
        document.querySelectorAll('label').forEach(item=>{
            item.classList.remove('bg-green-200')
        })
        //Assign the green background to the current selected option
        event.currentTarget.classList.add('bg-green-200')
    }

    const displayQuestion = questions.map((question, index) => {
        //Get the question which index matches the currentQuestion state
        if(index == currentQuestion){
            //Randomly insert the correct answer into the incorrect answers array
            //Generate a Random Number less than 4
            const randomIndex = Math.floor(Math.random() * 4)
            //Check if correct answer is not in the incorrect answer array
            if(!question.incorrect_answers.includes(question.correct_answer)){
                //Randomly insert the correct answer in the incorrect answer array with the index number randomly generated
                question.incorrect_answers.splice(randomIndex, 0, question.correct_answer)
            }
            return (
                <div key={index} className='max-w-[690px] mx-auto'>
                    <h1 className='text-[#191D63] text-2xl leading-[136%] text-center font-semibold my-6'>{question.question.replaceAll('&quot;', '"').replaceAll('&#039;', "'").replaceAll('&amp;','&')}</h1>
                    <div className='flex flex-col gap-4 max-w-[450px] mx-auto'>
                        {
                            //Mapping the answers for user to be able to select appropriate option 
                            question.incorrect_answers.map((option, optionIndex)=>{
                                return(
                                    <div key={`p-${optionIndex}`}>
                                        <input className='hidden' onChange={selectiOption} type="radio" name={questions[index].question} id={`option-${index}-${optionIndex}`} value={option} />
                                        <label onClick={markOption} htmlFor={`option-${index}-${optionIndex}`} className='bg-grey py-3 cursor-pointer px-6 rounded-lg flex items-center gap-8'>
                                            <div className='h-8 w-8 rounded-full flex items-center justify-center bg-primary font-xl font-semibold text-dark-100 shrink-0'>{alphOptions[optionIndex]}</div>
                                            <span className='text-lg font-semibold '>{option.replaceAll('&quot;', '"').replaceAll('&#039;', "'").replaceAll('&amp;','&')}</span>
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
    })

    //Progress bar showing user how far they have gone with their questions
    const progress = <>
                    <div className='w-full md:w-[250px] h-4 rounded-full bg-white md:bg-primary overflow-hidden'>
                            <div className='h-full bg-green-100 rounded-full' style={{width: ((currentQuestion + 1) / questions.length) * 100 + '%'}}></div>
                        </div>
                        <span>{`${currentQuestion + 1}/${questions.length}`}</span>
                    </>

    return (
            <div className='flex h-screen flex-col justify-between relative'>
                
                {
                //Start modal indicating the topic, number of question and duration they have to answer answer the questions
                //Modal get dismissed once the user click start
                showModal && <div className='bg-black/[0.5] w-full left-0 border h-screen fixed z-20 flex items-center justify-center'>
                    <div className='w-[500px] h-[400px] max-w-[95%] bg-white p-6 sm:p-12 flex flex-col justify-center'>
                        <div className='w-full font-medium text-lg'>
                            <div className='py-4 flex'>
                                <div className='w-2/5 shrink-0 font-semibold'>Topic:</div>
                                <div className='w-3/5 shrink-0'>{subject}</div>
                            </div>
                            <div className='py-4 flex'>
                                <div className='w-2/5 shrink-0 font-semibold'>Questions:</div>
                                <div className='w-3/5 shrink-0'>{questions.length}</div>
                            </div>
                            <div className='py-4 flex'>
                                <div className='w-2/5 shrink-0 font-semibold'>Total Time:</div>
                                <div className='w-3/5 shrink-0'>100 seconds</div>
                            </div>
                        </div>
                        <button onClick={()=>setShowModal(false)} className='font-medium bg-green-100 text-white px-8 py-2 block mx-auto mt-10'>Start</button>
                    </div>
                </div>}
                <header className='pt-8 px-4 sm:px-0'>   
                    <div className='mx-auto container flex items-center justify-between'>
                        <Link to='/' className='hidden sm:inline'><img src={logo} alt="logo" /></Link>
                        <span className='font-semibold text-2xl text-black '>{subject}</span>
                        <Link to='/'>
                            <button className='h-8 w-8 rounded-full bg-grey flex items-center justify-center'>
                                <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.9583 8.99996L16.9305 3.04163C17.192 2.7801 17.339 2.42538 17.339 2.05552C17.339 1.68566 17.192 1.33094 16.9305 1.06941C16.669 0.807877 16.3143 0.66095 15.9444 0.66095C15.5745 0.66095 15.2198 0.807877 14.9583 1.06941L8.99995 7.04163L3.04162 1.06941C2.78009 0.807877 2.42537 0.66095 2.05551 0.66095C1.68565 0.66095 1.33093 0.807877 1.0694 1.06941C0.807867 1.33094 0.66094 1.68566 0.66094 2.05552C0.66094 2.42538 0.807867 2.7801 1.0694 3.04163L7.04162 8.99996L1.0694 14.9583C0.939222 15.0874 0.835897 15.241 0.765385 15.4103C0.694873 15.5795 0.658569 15.7611 0.658569 15.9444C0.658569 16.1278 0.694873 16.3093 0.765385 16.4785C0.835897 16.6478 0.939222 16.8014 1.0694 16.9305C1.19852 17.0607 1.35213 17.164 1.52138 17.2345C1.69063 17.305 1.87216 17.3413 2.05551 17.3413C2.23886 17.3413 2.4204 17.305 2.58965 17.2345C2.75889 17.164 2.91251 17.0607 3.04162 16.9305L8.99995 10.9583L14.9583 16.9305C15.0874 17.0607 15.241 17.164 15.4103 17.2345C15.5795 17.305 15.761 17.3413 15.9444 17.3413C16.1277 17.3413 16.3093 17.305 16.4785 17.2345C16.6478 17.164 16.8014 17.0607 16.9305 16.9305C17.0607 16.8014 17.164 16.6478 17.2345 16.4785C17.305 16.3093 17.3413 16.1278 17.3413 15.9444C17.3413 15.7611 17.305 15.5795 17.2345 15.4103C17.164 15.241 17.0607 15.0874 16.9305 14.9583L10.9583 8.99996Z" fill="black"/>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </header>
                <section className='px-4 md:px-0 md:hidden'>
                    <div className='flex items-center gap-2'>
                        {progress}
                    </div>
                </section>
                <main>
                    <div className='container mx-auto px-4 sm:px-0'>
                        {displayQuestion}
                    </div>
                </main>
                <footer className=' bottom-0 left-0 w-full bg-grey flex justify-center items-center mt-2 py-4 font-medium'>
                    <div className='items-center gap-2 hidden md:flex'>
                        {progress}
                    </div>
                    <div className='mx-16 relative'>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-green-100' d="M43.2877 6.11904L42.3733 5.20464C40.3921 3.22345 37.0393 3.22345 35.0581 5.20464L33.2293 7.03344C30.0289 5.50944 26.3713 4.89985 22.5614 5.35704C13.5698 6.42384 6.40702 13.5866 5.34022 22.5782C3.96863 34.6177 13.265 44.8285 24.9997 44.8285C28.3525 44.8285 31.5529 44.0665 34.2961 42.5425L37.6489 45.8953C37.8013 46.0477 37.9537 46.2001 38.1061 46.2001H38.2585H38.4109C38.5633 46.2001 38.5633 46.2001 38.7157 46.2001C38.8681 46.2001 38.8681 46.2001 39.0205 46.2001H39.1729H39.3253C39.4777 46.2001 39.6301 46.0477 39.7825 45.8953C39.9349 45.7429 40.0873 45.5905 40.0873 45.4381V45.2857V45.1333V44.9809V37.8181C42.9829 34.3129 44.6593 29.8933 44.6593 25.169C44.6593 21.359 43.5925 18.0062 41.7637 14.9582L43.2877 13.4342C45.2689 11.453 45.2689 8.10023 43.2877 6.11904ZM40.2397 26.5406H41.7637C41.3065 31.5697 38.5633 35.9893 34.6009 38.7325C33.9913 39.1897 33.3817 39.4945 32.7721 39.7993C30.9433 40.7137 28.8097 41.4757 26.6761 41.6281V40.1041C26.6761 39.3421 25.9141 38.5801 25.1521 38.5801C24.3901 38.5801 23.6282 39.3421 23.6282 40.1041V41.6281C15.551 40.8661 9.15021 34.4653 8.38821 26.3882H9.9122C10.6742 26.3882 11.4362 25.6262 11.4362 24.8642C11.4362 24.1022 10.6742 23.3402 9.9122 23.3402H8.23581C8.99781 15.4154 15.3986 9.01463 23.4758 8.25263V9.77663C23.4758 10.5386 24.2377 11.3006 24.9997 11.3006C25.7617 11.3006 26.5237 10.5386 26.5237 9.77663V8.25263C34.6009 9.01463 41.0017 15.4154 41.7637 23.4926H40.2397C39.4777 23.4926 38.7157 24.2546 38.7157 25.0166C38.7157 25.7786 39.4777 26.5406 40.2397 26.5406Z"/>
                            <path className='fill-green-100' d="M25 11.3006V5.20464C22.1044 5.20464 19.2089 5.81424 16.7705 7.03344L14.9417 5.20464C12.9605 3.22345 9.60769 3.22345 7.6265 5.20464L6.7121 6.11904C4.73091 8.10023 4.73091 11.453 6.7121 13.4342L8.0837 14.8058C6.25491 17.8538 5.18811 21.2066 5.18811 25.0166C5.18811 29.7409 6.8645 34.1605 9.76009 37.6657V44.8285C9.76009 44.9809 9.76009 45.1333 9.76009 45.2857V45.4381C9.76009 45.4381 9.76009 45.4381 9.76009 45.5905C9.76009 45.7429 9.91249 45.8953 10.0649 46.0477C10.2173 46.2001 10.3697 46.2001 10.5221 46.3525C10.5221 46.3525 10.5221 46.3525 10.6745 46.3525H10.8269C10.9793 46.3525 11.1317 46.3525 11.2841 46.3525C11.4365 46.3525 11.5889 46.3525 11.7413 46.3525H11.8937C11.8937 46.3525 11.8937 46.3525 12.0461 46.3525C12.1985 46.3525 12.3509 46.2001 12.5033 46.0477L15.8561 42.6949C18.5993 44.2189 21.7996 44.9809 25.1524 44.9809V38.8849C24.3904 38.8849 23.6284 39.6469 23.6284 40.4089V41.9329C21.3424 41.7805 19.3613 41.1709 17.5325 40.1041C16.9229 39.7993 16.3133 39.3421 15.7037 39.0373C11.7413 36.2941 8.9981 31.8745 8.5409 26.8454H10.0649C10.8269 26.8454 11.5889 26.0834 11.5889 25.3214C11.5889 24.5594 10.8269 23.7974 10.0649 23.7974H8.2361C8.9981 15.4154 15.3989 9.01463 23.476 8.25263V9.77663C23.476 10.5386 24.238 11.3006 25 11.3006Z" />
                        </svg>
                        <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-green-100'>{duration}</span>
                    </div>
                        <button ref={nextBtn} onClick={nextQuestion} className={`navigation-btn disabled:bg-grey-100 ${currentQuestion == questions.length -1 ? "hidden" : "flex"}`}>
                            Next
                            <svg width="9" height="12" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-grey' d="M5.90063 4.01686L0.240085 7.28498L0.240085 0.748744L5.90063 4.01686Z" />
                            </svg>
                        </button> 
                        {/* Show the submit button once the user reaches the last question  */}
                        <button onClick={()=>submitQuiz(intervalId)} className={`navigation-btn ${currentQuestion != questions.length - 1 ? "hidden" : "flex"}`}>Submit</button>
                </footer>
            </div>
    )

}

export default QuestionTemplate
