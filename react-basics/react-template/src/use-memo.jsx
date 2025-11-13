import {useState, useMemo} from 'react';

export default function App(){
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation =  useMemo(() => expensiveCalculation(count), []);

  function handleIncrement(){
    setCount(count + 1);
    calculation();
  }

  function handleTodo(){
    setTodos([...todos, "New todo"]);
  }

  function expensiveCalculation(calc){
    console.log("Calculating....");
    for(let i=0;i<1000000; i++){
      calc+=1;
    }
    return calc;
  }

  return(
    <>

    <button onClick={handleTodo}> Add to do </button>
    {
      todos.map((todo) => (
        <p key={todo}> {todo} </p>
      ))
    }
    <button onClick={handleIncrement}> + </button>
    <p> {count }</p>
    <p> Expensive calculation</p>
    <p> {calculation}</p>
    </>
  )
}