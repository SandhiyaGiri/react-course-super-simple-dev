import { useState } from "react"

export default function App(){

  const [text, setText] = useState("");

  const handleChange = (e) => (setText(e.target.value));
  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(text);};
  return(
    <form onSubmit={handleSubmit}>
      <lable>
        Name:
        <input 
        type="text" 
        onChange={handleChange}
        value={text}/>
      </lable>
      <input type="submit"/>
    </form>
  )
}