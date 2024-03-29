import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { Context } from '../Context';


function SubjectsModal({hideModal}) {
    const {categories, selectCategories, setSelectedCategories, fetchQuestions} = useContext(Context)
    const navigate = useNavigate()

    //Map through all the available topics and display them on the modal
    const categoriesItem = categories.map(cat => {
        const {id, name} = cat
        return(
            <div onClick={()=>selectCategory(id, name)} data-id={id} key={id} className="text-center text-black bg-[#D1D1D1] shrink-0 font-medium text-sm flex">
                <span 
                    className={`md:min-w-[70px] block cursor-pointer py-1.5 px-2.5 ${selectCategories.some(cat => cat.id == id) ? "bg-green-100 text-white" : ""}`}
                >
                        {name.split(":").length == 2 ? name.split(":")[1] : name.split(":")[0]}
                </span>
                {//Check if the categories is selected and include the remove button
                selectCategories.some(cat => cat.id == id) && 
                <button onClick={(e)=>removeCategory(e, id)} className="bg-black px-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.11898 11.2845L6.10586 7.2976L10.0927 11.2845L11.4346 9.94259L7.44774 5.95571L11.4346 1.96884L10.0927 0.626953L6.10586 4.61383L2.11898 0.626953L0.7771 1.96884L4.76398 5.95571L0.7771 9.94259L2.11898 11.2845Z" fill="white"/>
                    </svg>            
                </button>
                }
            </div>
        )
    })

    //Removing a topic from selected categories
    const removeCategory = (e, id) => {
        //Prevent event bubbling
        e.stopPropagation()
        // filter out the category 
        setSelectedCategories(prevItem => {
            return prevItem.filter(item => item.id != id)
        })
    }

    //Adding topics to selected
    const selectCategory = (id, name) => {
        //Check if the topic has not been included and selected topic is more than three
        if(!selectCategories.some(cat => cat.id == id) && selectCategories.length < 3){
            //Add to the topic to selected
            setSelectedCategories([...selectCategories, {id: id, name: name}])
        } else if(selectCategories.length >= 3){
            //If the topic selected is up to 3, show toast
            toast("You cannot add more than 3")
        }
    }

    //Featch questions for the selected topics 
    //Navigate to the instruction page
    function handleClick(e){
        e.target.disabled = true; 
        fetchQuestions()
        navigate('/instruction')
    }

    return (
        <div className='h-screen w-full fixed top-0 left-0 bg-black/[0.5] flex items-center justify-center z-10'>
            <ToastContainer />
            <div className='relative bg-white w-[95%] sm:w-4/5 py-8 sm:py-[62px] md:pr-[29px]'>
                <svg onClick={hideModal} className='absolute right-3 md:right-[18px] top-3 md:top-[18px]' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.1303 9.699L17.3654 3.47752C17.6384 3.20444 17.7918 2.83406 17.7918 2.44786C17.7918 2.06166 17.6384 1.69128 17.3654 1.4182C17.0923 1.14512 16.722 0.991699 16.3358 0.991699C15.9497 0.991699 15.5794 1.14512 15.3063 1.4182L9.08573 7.65418L2.86514 1.4182C2.5921 1.14512 2.22177 0.991699 1.83563 0.991699C1.44948 0.991699 1.07916 1.14512 0.806111 1.4182C0.533067 1.69128 0.379672 2.06166 0.379672 2.44786C0.379672 2.83406 0.533067 3.20444 0.806111 3.47752L7.0412 9.699L0.806111 15.9205C0.670203 16.0553 0.56233 16.2157 0.488714 16.3924C0.415099 16.5691 0.377197 16.7587 0.377197 16.9501C0.377197 17.1416 0.415099 17.3311 0.488714 17.5079C0.56233 17.6846 0.670203 17.845 0.806111 17.9798C0.940909 18.1157 1.10128 18.2236 1.27798 18.2972C1.45468 18.3709 1.64421 18.4088 1.83563 18.4088C2.02705 18.4088 2.21657 18.3709 2.39327 18.2972C2.56997 18.2236 2.73034 18.1157 2.86514 17.9798L9.08573 11.7438L15.3063 17.9798C15.4411 18.1157 15.6015 18.2236 15.7782 18.2972C15.9549 18.3709 16.1444 18.4088 16.3358 18.4088C16.5273 18.4088 16.7168 18.3709 16.8935 18.2972C17.0702 18.2236 17.2306 18.1157 17.3654 17.9798C17.5013 17.845 17.6091 17.6846 17.6828 17.5079C17.7564 17.3311 17.7943 17.1416 17.7943 16.9501C17.7943 16.7587 17.7564 16.5691 17.6828 16.3924C17.6091 16.2157 17.5013 16.0553 17.3654 15.9205L11.1303 9.699Z" fill="#D1D1D1"/>
                </svg>
                <h2 className='text-2xl md:text-[37px] font-medium text-center'>Choose your favorite topics</h2>
                <p className='text-center my-2 md:my-5'>Select 3 topics to start quiz</p>
                <div className='flex flex-wrap gap-3 lg:gap-[30px] px-4 sm:pl-10 md:pl-[80px]'>
                    {categoriesItem}
                </div>
                <button 
                    disabled={selectCategories.length === 3 ? false : true}
                    onClick={handleClick}
                    className='text-sm bg-green-100 py-2 px-6 font-medium text-white mt-2 sm:mt-11 mr-4 md:mr-0 ml-auto block disabled:opacity-50'
                >
                    Start Quiz
                </button>
            </div>
            
        </div>
    )
}

export default SubjectsModal
