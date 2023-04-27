import React from 'react';
import { Tabs, Tab, Toolbar, AppBar, Box, Typography } from '@mui/material';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { UserMenu, LoadingIndicator } from 'react-admin';

import SettingsIcon from '@mui/icons-material/Settings';
import EventIcon from '@mui/icons-material/Event';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import LogoutButton from './LogoutButton';
import ProfileButton from './ProfileButton';

const Header = () => {
    const location = useLocation();

    let currentPath = '/';
    if (!!matchPath('/groupe/*', location.pathname)) {
        currentPath = '/groupe';
    } else if (!!matchPath('/meeting/*', location.pathname)) {
        currentPath = '/meeting';
    } else if (!!matchPath('/groupe/*', location.pathname)) {
        currentPath = '/groupe';
    }

    return (
        <Box component="nav" sx={{ flexGrow: 1 , bgcolor: '#3b33aa'}}>
            <AppBar position="static" sx={{ backgroundColor: '#3530978a' }}>
                <Toolbar variant="dense">
                <Box flex={1} display="flex" justifyContent="space-between" marginBottom={0}>
  <Box display="flex" alignItems="center">
    <Box
      component="img"
      sx={{ marginRight: '1em', height: 20 }}
      src={
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
      }
      alt="Bosch Logo"
    />
    <Typography component="span" variant="h5">
      VISIOCALL
    </Typography>
  </Box>
  <Box>
    <Tabs
      value={currentPath}
      aria-label="Navigation Tabs"
      indicatorColor="secondary"
      textColor="inherit"
    >
        <Tab
        icon={<HomeIcon />}
        iconPosition="start"
        label="Accueil"
        component={Link}
        to="/home"
        value="/home"
      />
      <Tab
        icon={<ChatIcon />}
        iconPosition="start"
        label="Chat de groupe"
        component={Link}
        to="/chat"
        value="/chat"
      />
      <Tab
        icon={<EventIcon />}
        iconPosition="start"
        label={'Réunions'}
        component={Link}
        to="/meetings"
        value="/meetings"
      />
      <Tab
        icon={<SettingsIcon />}
        iconPosition="start"
        label={'Paramètres'}
        component={Link}
        to="/settings"
        value="/settings"
      />
    </Tabs>
  </Box>
  <Box display="flex" marginTop={1}>
    <LoadingIndicator
        sx={{
            '& .RaLoadingIndicator-loader': {
                marginTop: 2,
            },
        }}
    />
    <UserMenu>     <ProfileButton />
        <LogoutButton href="/"  />
   
    </UserMenu>
</Box>

</Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
