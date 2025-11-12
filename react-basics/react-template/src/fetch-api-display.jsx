import {useState, useEffect} from 'react';

export default function App(){
  const [users, setUsers] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if(!response.ok){
        throw new Error("Response failed to fetch")
      }
      return response.json();
    })
    .then((data)=>{
      setUsers(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    })}, []);

    if(loading) return <p> Loading...</p>;
    if(error) return <p> {error.message} </p>

    return (
      <div>
        <h1> Users List</h1>
        <ul>
          {
            users.map((user) =>{
              return (
              <li key={user.id}> {user.name} {user.email} </li>
              );
            })
          }
        </ul>
      </div>
    );

  }