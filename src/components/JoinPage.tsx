import React from 'react';

import { useNavigate } from 'react-router-dom';
import {
    Box, Button, TextField ,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
} from '@mui/material';
const JoinPage = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    // handle cancel
  };

  const handleJoin = () => {
    navigate('/join-meeting');
  };

  return (

    
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box>
        <TextField
          id="standard-basic"
          label="N° de réunion ou nom de lien personnel"
          variant="standard" style={{ color: '#3530978a' }}
          sx={{ width: '120%', maxWidth: '700px' }}
        />
        <Box marginTop={2} display="flex" justifyContent="space-between">
          <Button variant="outlined" onClick={handleCancel} style={{ backgroundColor: '#3530978a', color: '#fff' }} >
            Annuler
          </Button>
          <Button variant="contained" onClick={handleJoin} style={{ backgroundColor: '#3b33aa', color: '#fff', marginLeft: 8 }}>
            Rejoindre
          </Button>
        </Box>
      </Box>


      
                        
    </Box>
  );
};

export default JoinPage;
