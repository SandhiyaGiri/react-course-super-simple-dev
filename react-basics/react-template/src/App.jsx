import { useState, createContext, useContext} from "react";

export default function App(){
    const userContext = createContext();
    function Component1(){
        const [user, setUser] = useState("Sandhiya");
        
        return(
            <userContext.Provider value={user}>
                <h1>Component 1</h1>
                <p> User of component 1 : <b> {user } </b></p>
                <Component2 user={user}/>
            </userContext.Provider>
        )
    }

    function Component2(){
        return(
            <>
                <h1>Component 2</h1>
                <Component3 />
            </>
        )
    }

    function Component3(){
        const user = useContext(userContext);
        return(
            <>
                <h1>Component 3</h1>
                <p>  {user }</p>
            </>
        )
    }

    return (
        <Component1 />
    )
}