import React, { useId, useReducer, useState } from 'react'

function reducer(state, action){
    if(action.type === "add_todo"){
        return (
            [...state, {id: new Date().getTime(), title: 'todoTitle', isCompleted: false}]
        )
    }
}


function Todo() {
    const [todoTitle, setTodoTitle] = useState('')
    const [todoList, setTodoList] = useState([])
    const [state, dispatch] = useReducer(reducer, [] )

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type: "add_todo"})
        setTodoTitle('')
    }

    function editTodo(e, id){
        setTodoList(
            todoList.map(todo => {
                if(todo.id === id){
                    return({...todo, title: e.target.value})
                }
                return todo
            })
        )
    }

    function toggleItem(id){
        setTodoList(
            todoList.map(todo => {
                if(todo.id === id){
                    return({...todo, isCompleted: !todo.isCompleted})
                }
                return todo
                })
        )
    }

    function deleteItem(id){
        setTodoList(todoList.filter(todo => todo.id !== id))
    }

    function enableEdit(id){
        document.querySelector(`#todo-${id}`).disabled = false
        document.querySelector(`#todo-${id}`).focus();
    }

    const todoItems = state.map((todo, index) => {
        console.log(state)
        return <li key={todo.id} className ='py-2 flex items-center gap-3'>
            <input 
                onChange={(e)=>{editTodo(e, todo.id)}} 
                onBlur={(e)=> e.target.disabled = true}
                value={(todo.title)} 
                disabled 
                id={'todo-'+todo.id} 
                className={todo.isCompleted ? 'text-grey-100 strikethrough' : 'text-green-500'}
            />
            <button onClick={()=> toggleItem(todo.id)} className='text-sm bg-cyan-500 ml-auto text-white p-1 rounded'>Toggle</button>
            <button onClick={()=> enableEdit(todo.id)} className='bg-green-200 text-sm text-white p-1 px-2 rounded'>Edit</button>
            <button onClick={()=> deleteItem(todo.id)} className='text-sm bg-red-400 text-white rounded p-1'>Delete</button>
        </li>
    })
    

    return (
        <div className='p-10'>
            <div className='p-3 w-fit bg-white shadow-md rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    name="todo-item" 
                    id="todo-item" 
                    value={todoTitle} 
                    onChange={e => setTodoTitle(e.target.value)}
                    className="border border-black/[0.5] w-full rounded"
                />
                </form>

                <ul className='pt-3 w-full h-72 overflow-y-scroll'>
                    {todoItems}
                </ul>
            </div>
        </div>
    )
}

export default Todo
