import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const TodoList = ({filter}) => {

    const todoList = useSelector((state)=>state.todoReducer.tasks)


    const filtredArray = todoList.filter((el)=>
      filter == "ALL" ? el : el.isDone == filter
    )



  return (
    <div>
        {
            filtredArray.map((el,i)=> <Todo todo={el} key={i} /> )
        }
    </div>
  )
}

export default TodoList