import { useState } from "react";

export default function App(){
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);


  const addTodos = () => {
    if(task.trim() === '') return;
    console.log(task);
    console.log(todos);
    setTodos([...todos, task]);
    setTask("");
  }

  const deleteToDos = (index) =>{
    setTodos(todos.filter((_, i) => i!==index));
  }

  return (
    <div>
    <input 
    type= "text" 
    placeholder="Enter item to add..." 
    className = "inputField"
    value={task}
    onChange={(e) => setTask(e.target.value)}>
    </input>

    <button onClick={addTodos}>
      Add
    </button>
    
    <ul>
      {todos.map((todo, index) => 
        (
        <li key={index}> 
          {todo} 
          <button onClick={ () => deleteToDos(index)}> Delete </button>
        </li>)
      )
      }
    </ul>
    </div>
  );
}




