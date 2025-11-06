import UserProfileImage from '../assets/user.png'
import RobotProfileImage from '../assets/robot.png'
import './ChatMessage.css'

export function ChatMessage({message, sender}) {
  return (
    <div className={
        sender=='user' 
        ? 'chat-input-user'
        : 'chat-input-robot'
      }> 
      {sender == 'robot' && 
        (<img src={RobotProfileImage} width="40px" />)
      }
      <div className='chat-message-text'>
          {message} 
      </ div>
      {sender == 'user' && 
        (<img src={UserProfileImage} width="40px" />)
      }
    </div>
  );
}