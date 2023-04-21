import * as React from 'react';
import { Grid } from '@mui/material';
import { useState } from 'react';
import BodyChat from './Bodychat';
import '../chat.css'
import { Link } from 'react-router-dom';

export const Chat = () => {
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

 return (   <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={12}>
        <div className="center">
        <div className="contacts">
    <i className="fas fa-bars fa-2x"></i>
    <h2>
      Contacts
    </h2>
    {recentChats.map((chat) => (
        <Link
          to={chat.path}
          className="contact"
          key={chat.id}
          style={linkStyle}
          onClick={() => handleChatClick(chat.id)}
        >
          <div className="pic danvers"></div>
          <div className="badge">{chat.id}</div>
          <div className="name">{chat.title}</div>
          <div className="message">
            Hey Peter Parker, you got something for me?
          </div>
        </Link>
      ))}
  </div>
  {chatId}
  {chatId && <BodyChat chatId={chatId} />}
            </div>
        </Grid>
    </Grid>
    );
}

