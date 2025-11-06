import { useState } from 'react'
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'


function App() {
    const [chatMessages, setChatMessages] = useState([
        {message: "Hello! How can I assist you today?", sender: 'robot' , id : 'id1'},
        {message: "Flip a coin", sender: 'user', id : 'id2'},
        {message: "You got heads", sender: 'robot', id : 'id3'},
        {message: "What is React?", sender: 'user', id : 'id4'},
    ]);

    return (
        <div className = "app-container">
            <ChatInput 
                chatMessages = {chatMessages}
                setChatMessages = {setChatMessages}
            />
            <ChatMessages chatMessages = {chatMessages} />
        </div>
    );
}
export default App;
      