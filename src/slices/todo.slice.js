import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const TodosSlice = createSlice({
    name : "todos",
    initialState:{
        tasks : [
            { id: "1", description: 'Finish the report', isDone: false },
            { id: "2", description: 'Clean the house', isDone: false },
            { id: "3", description: 'Call the electrician', isDone: false },
            { id: "4", description: 'Buy groceries', isDone: false },
            { id: "5", description: 'Exercise for 30 minutes', isDone: false }
          
        ]
    },
    reducers : {
        addTodo : (state , action) => {
            state.tasks = [...state.tasks , {...action.payload , id:uuidv4()}]
        },

        editTodo : (state , action) => {
            state.tasks = state.tasks.map((el)=> 
            action.payload.id == el.id ? {...el , description : action.payload.description } : el )

        },

        toggleTodo : (state , action) => {
            state.tasks = state.tasks.map((el)=> 
            action.payload == el.id ? {...el , isDone : !el.isDone } : el )

        },

        deleteTodo : (state , action) => {
            state.tasks = state.tasks.filter((el)=> el.id !== action.payload )
        }
    }
})

export const todoReducer = TodosSlice.reducer ;

export const {addTodo , editTodo , toggleTodo , deleteTodo} = TodosSlice.actions
