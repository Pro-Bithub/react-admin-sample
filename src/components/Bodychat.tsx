import { useParams } from 'react-router-dom';
import '../chat.css'
import { db } from "../firebaseConfig";
import { getFirestore, collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useState ,useEffect } from 'react';
interface BodyChatProps {
  chatId: string;
}

const BodyChat = ({ chatId }: BodyChatProps) => {
  const { id } = useParams<{ id: string }>();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (chatId) {
      const messagesRef = collection(db, "chats", chatId, "messages");
      const messagesQuery = query(messagesRef, orderBy("timestamp", "asc"));

      const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      return () => unsubscribe();
    }
  }, [chatId]);
  return (
    <>
    
    <div className="chat">
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
    {/*   {messages.map((message) => (
        <div key={message.id}>
          <p>{message.data.message}</p>
          <p>{message.data.sender}</p>
        </div>
      ))} */} 
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
  </div>
 {/*    <div>
      <h1>Chat with ID {chatId}</h1>
      <p>Current URL parameter: {id}</p>
    </div> */}
    </>
  );
};

export default BodyChat;
