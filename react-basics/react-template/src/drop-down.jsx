import React, {useState} from "react";

export default function App(){
  const data = {
  TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
};

  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  function handleState(event){
    setState(event.target.value);
    setCity("");
  }

  function handleCity(event){
    setCity(event.target.value);
  }

  return(
    <>
    <label>
      State:
      {" "}
      <select onChange={handleState} value={state} > 
      <option> -- Select state -- </option>
      {Object.keys(data).map((state) => (
        <option key={state} value={state}> {state}</option>
      ))}
      </select>
    </label>

    <lable> 
    City:
    {" "}
      
      <select onChange={handleCity} disabled={!state} value={city}>
        <option> -- Select City -- </option>
        {state &&
          data[state].map((city) => {
            return(
              <option key={city} value={city}> {city} </option>
            );
          })
        }
      </select>
    </lable>
    </>
  )

};