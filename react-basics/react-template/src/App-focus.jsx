// import {useState, useEffect, useRef} from 'react';

// export default function App(){
//   const [text, setText] = useState("");
//   // const [countState, setCountState] = useState(0);
//   const count = useRef(0);

//   // useEffect(() => {count.current = count.current + 1});
//   useEffect(() => {count.current += 1});

//   return (
//     <div>
//       <input 
//       type='text'
//       onChange={(e) => setText(e.target.value)}
//       value={text}/>
//       <p>
//         The render count is {count.current};
//       </p>
//     </div>
//   );
// }

import {useRef} from 'react'

export default function App(){
  const inputElement = useRef(0);
  const selectElement = useRef(0);


  const focusInput = () => {
    inputElement.current.focus();
  }

  const focusSelect = () => {
    selectElement.current.focus();
  }
  return(
    <>
    <input
    type='text'
    ref={selectElement}
    />

    <select ref={inputElement}>
      State
      <option> -- State only -- </option>
    </select>
    <button onClick={focusInput}> Focus Element </button>
    <button onClick={focusSelect}> Focus Select </button>
    </>
  )
}