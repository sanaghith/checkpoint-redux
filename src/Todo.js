import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "./slices/todo.slice";

const Todo = ({ todo }) => {

    const dispatch = useDispatch()
    const [toEdit , setToEdit] = useState(false)
    const [taskToUpdate , setTaskToUpdate] = useState({
        description : todo.description ,
        isDone : todo.isDone ,
        id : todo.id
    })
    
  
    const hadleToEdit = () => {
        setToEdit(!toEdit)
        setTaskToUpdate({
            ...taskToUpdate ,
            description : todo.description
        })
    }

    const handleChange = (e) => {
        setTaskToUpdate({
            ...taskToUpdate ,
            description : e.target.value
        })
    }
     

    const handleUpdate = () => {
        dispatch(editTodo(taskToUpdate))
        setToEdit(!toEdit)
    }


  return (
    <div>
      <hr />

      <div className="d-flex flex-row align-item-center justify-content-center">


        {
            toEdit ?
            
            <>
                <input
                    type="text"
                    value = {taskToUpdate.description}
                    onChange = {handleChange}
                />

                <button onClick={handleUpdate}> save </button>
            </>
            

            :

            <>

                <button className="me-5" onClick={()=> dispatch(deleteTodo(todo.id)) }>
                    Delete
                </button>

                <input 
                    className="me-3" 
                    type="checkbox" 
                    checked={todo.isDone} 
                    onChange={()=>dispatch(toggleTodo(todo.id))}     
                />
                <h1 
                    className="me-3" 
                    style={{textDecoration : todo.isDone ? "line-through" : "none" }}
                > 
                    {todo.description} 
                </h1>
            </>

        }


       
  


        <button onClick={hadleToEdit}> {toEdit ? "Cancel" : "Edit task"} </button>
       
      </div>

      <hr />
    </div>
  );
};

export default Todo;
