import React, { useState } from "react";

import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
} from '@mui/material';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import EventIcon from '@material-ui/icons/Event';
import Button from '@mui/material/Button';
import '../App.css'
import { useNavigate } from 'react-router-dom';

const styles = {
    backgroundColor: '#3b33aa',
    margin: '10px'
  };

export const Home = () => {
    const date = new Date();
    const navigate = useNavigate();
    const handleButtonClickRejoindre = () => {
        navigate('/join');
    };
    const handleButtonClickMeeting = () => {
        navigate('/meetings');
    };
    const handleButtonClickplanifier = () => {
        navigate('/planifier');
    };
    
    return (  
         <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={8}>
            <div className="home-btn">
            <Button variant="contained" onClick={handleButtonClickMeeting} size="large" startIcon={<PlayCircleFilledIcon />} style={{  backgroundColor: styles.backgroundColor, margin: styles.margin  }}>
Démarrer
</Button> 
            <Button variant="contained" onClick={handleButtonClickRejoindre}  size="large" startIcon={<GroupAddIcon />} style={{  backgroundColor: styles.backgroundColor, margin: styles.margin  }}>
            Rejoindre
</Button>

<Button variant="contained" size="large" onClick={handleButtonClickplanifier}  startIcon={<EventIcon />} style={{  backgroundColor: styles.backgroundColor, margin: styles.margin  }}>
Planifier
</Button>

            </div>
       
        </Grid>
   
        <Grid item xs={12} md={4}>
        <Card>
                            <CardMedia
                                image={`/meeting_re_i53h.svg`}
                                sx={{ height: 150 }}
                            />

                            <CardContent sx={{ paddingBottom: '0.5em' }}>
                            <Typography variant="h3" component="h3" align="center">
  {date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
</Typography>
<Typography variant="h5" component="h5" align="center">
  {date.toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
</Typography>

                             {/*    <Typography
                                    variant="h5"
                                    component="h2"
                                    align="center"
                                >          Ma réunion <Button variant="contained" style={{  backgroundColor: '#3530978a',   margin: '0 10px' }}>
                                Démarrer
                              </Button>
                              
                                      </Typography>  */} 
                            </CardContent>
                            <CardActions
                                sx={{
                                    '.MuiCardActions-spacing': {
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                    },
                                }}
                            >
                              
                            </CardActions>
                        </Card>
        </Grid>
    </Grid>)
    }


