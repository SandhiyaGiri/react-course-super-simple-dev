import { useState } from "react";
import {Chatbot} from 'supersimpledev'
import './ChatInput.css'

function ChatInput({chatMessages, setChatMessages}) {
  const [inputText, setInputText] = useState("");
  function handleChange(event){
      setInputText(event.target.value);
  }

function sendMessage(){
    const newChatMessages = [...chatMessages, {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID()
    }];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([...newChatMessages, {
        message: response,
        sender: "robot",
        id: crypto.randomUUID()
    }]);
}

    return (
    <>
    <input  onChange = {handleChange} 
            value={inputText}
            placeholder="Type your message..." 
            size = '30'
            className = "input-box"/>
    <button onClick = {sendMessage} className = 'send-button'>
        Send
    </button>
    </>
    );
}

export default ChatInput;