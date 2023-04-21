import { useState } from 'react';

import BodyChat from './Bodychat';
import '../chat.css'
import { Link } from 'react-router-dom';
const RecentChatsMenuItem = () => {
  const [chatId, setChatId] = useState(null);
  const handleChatClick = (id) => {
    setChatId(id);
  };
const linkStyle = {
    color: 'rgb(59, 51, 170)',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  };
// You can replace this data with your own data source
const recentChats = [
  { id: 1, title: 'Chat with John', path: '/chat/1' },
  { id: 2, title: 'Chat with Jane', path: '/chat/2' },
  { id: 3, title: 'Chat with Bob', path: '/chat/3' },
];
return (
<>
 
 {/*  <div className="chat">
    <div className="contact bar">
      <div className="pic stark"></div>
      <div className="name">
        Tony Stark
      </div>
      <div className="seen">
        Today at 12:56
      </div>
    </div>
    <div className="messages" id="chat">
      <div className="time">
        Today at 11:41
      </div>
      <div className="message parker">
        Hey, man! What's up, Mr Stark? 👋
      </div>
      <div className="message stark">
        Kid, where'd you come from? 
      </div>
      <div className="message parker">
        Field trip! 🤣
      </div>
      <div className="message parker">
        Uh, what is this guy's problem, Mr. Stark? 🤔
      </div>
      <div className="message stark">
        Uh, he's from space, he came here to steal a necklace from a wizard.
      </div>
      <div className="message stark">
        <div className="typing typing-1"></div>
        <div className="typing typing-2"></div>
        <div className="typing typing-3"></div>
      </div>
    </div>
    <div className="input">
      <i className="fas fa-camera"></i><i className="far fa-laugh-beam"></i><input placeholder="Type your message here!" type="text" /><i className="fas fa-microphone"></i>
    </div>
  </div> */}
</>
  );
  
}
export default RecentChatsMenuItem;