import { useState } from "react";

export default function App(){

  const [text, setText] = useState("");
  const handleText = (e) => {setText(e.target.value)};
  return(
    <form>
      <label>
        Write something really long...
      </label>
      <br></br>
      <textarea 
        onChange={handleText}
        value={text}
        placeholder="Type something..." />
    </form>
  )
}