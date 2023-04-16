import * as React from 'react';
import { useTranslate } from 'react-admin';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

const RecentChatsMenu = () => {
  const translate = useTranslate();

  // You can replace this data with your own data source
  const recentChats = [
    { id: 1, title: 'Chat with John', path: '/chats/1' },
    { id: 2, title: 'Chat with Jane', path: '/chats/2' },
    { id: 3, title: 'Chat with Bob', path: '/chats/3' },
  ];

  return (
    <List>
      <ListItem button component={Link} to="/chats" selected={false}>
        <ListItemText primary={translate('resources.chats.name')} />
      </ListItem>
      {recentChats.map((chat) => (
        <ListItem key={chat.id} button component={Link} to={chat.path} selected={false}>
          <ListItemText primary={chat.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default RecentChatsMenu;
