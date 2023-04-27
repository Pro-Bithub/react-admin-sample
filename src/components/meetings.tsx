import React from 'react';

import { useNavigate } from 'react-router-dom';
import {
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
} from '@mui/material';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import Button from '@mui/material/Button';
const styles = {
    backgroundColor: '#3b33aa',
    margin: '10px'
  };
  const stylescopie = {
    backgroundColor: 'rgba(53, 48, 151, 0.54)',
    margin: '10px'
  };

const Meetings = () => {
  const navigate = useNavigate();
  const myMeetingCode = "1234567890"; // Remplacez cette variable par votre propre code de réunion

  const handleCancel = () => {
    // handle cancel
  };

  const handleJoin = () => {
    navigate('/join-meeting');
  };

  return (

    <Grid container spacing={2} mt={1}>
    <Grid item xs={12} md={4}>
    
    <Card
        sx={{
            background: `#37319f0f`,
            color: 'rgba(0, 0, 0, 0.87)',
            padding: '1em',
            marginBottom: '1em',
            marginTop: '2em',
            [`& .MuiCardActions-root`]: {
                p: 2,
                mt: -2,
                mb: -1,
                flexDirection: 'column',
                '& a': {
                    mb: 1,
                    color: 'rgba(0, 0, 0, 0.87)',
                    backgroundColor: 'white',
                    marginLeft: '0 !important',
                },
            },
        }}
    >
        <CardContent>
            <Typography variant="h5" gutterBottom>
             À venir
            </Typography>
            <Typography variant="h6" component="h5">
          Mon ID de réunion personnelle
        </Typography>
        <Typography variant="h4" component="h1">
          {myMeetingCode}
        </Typography> 
        </CardContent>
        <CardActions>
          
        
        </CardActions>
    </Card>
    </Grid>

    <Grid item xs={12} md={8}>
    <CardContent>
            <Typography variant="h5" gutterBottom>
            Mon ID de réunion personnelle
            </Typography> 
            <Typography variant="body2" fontSize={14}>
            {myMeetingCode}
            </Typography> 
            <div className="meetings-btn">
            <Button variant="contained"  size="large" startIcon={<PlayCircleFilledIcon />} style={{  backgroundColor: styles.backgroundColor, margin: styles.margin  }}>
Démarrer
</Button> 
            <Button variant="contained"  size="large" style={{  backgroundColor: stylescopie.backgroundColor, margin: stylescopie.margin  }}  >
            Copier l’invitation
</Button>


            </div>
    </CardContent>

    </Grid>
</Grid>
  );
};

export default Meetings;
