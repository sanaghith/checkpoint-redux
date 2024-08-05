import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './slices/todo.slice'

const AddTodo = () => {

    const [input , setInput] = useState({
        description : "",
        isDone:false,
    })
        
    const dispatch = useDispatch()



    const handleChange = (e) => {
        setInput({
            ...input ,
            description : e.target.value
        })
    }   

  return (
    <div>
        <h1> Add Your New Task </h1>
        <input type="text" onChange={handleChange}/>

        <button onClick={()=> dispatch(addTodo(input))}> Submit </button>


    </div>
  )
}

export default AddTodo