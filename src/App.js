import { useState } from 'react';
import AddTodo from './AddTodo';
import './App.css';
import TodoList from './TodoList';

function App() {

  const [filter , setFilter] = useState("ALL")



  return (
    <div className="App">


      <AddTodo/>

      <button onClick={()=>setFilter(true)}> Done </button>
      <button onClick={()=>setFilter(false)}> Not Done </button>
      <button onClick={()=>setFilter("ALL")}> All </button>



      <TodoList filter={filter}/>
    </div>
  );
}

export default App;
