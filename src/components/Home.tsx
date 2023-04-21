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
export const Home = () => {
    const [date, setDate] = useState(new Date());
    return (  
         <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={8}>
            <div className="home-btn">
            <Button variant="contained" size="large" startIcon={<GroupAddIcon />} style={{margin: '0 10px'}}>
  Rejoindre
</Button>
<Button variant="contained" size="large" startIcon={<PlayCircleFilledIcon />} style={{margin: '0 10px'}}>
  Démarrer
</Button>
<Button variant="contained" size="large" startIcon={<EventIcon />} style={{margin: '0 10px'}}>
  Planifier
</Button>

            </div>
       
        </Grid>
   
        <Grid item xs={12} md={4}>
        <Card>
                            <CardMedia
                                image={`https://marmelab.com/posters/fr-1.jpeg`}
                                sx={{ height: 140 }}
                            />
                            <CardContent sx={{ paddingBottom: '0.5em' }}>
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    align="center"
                                >
                        Date avec secondes: {date.toLocaleString()}
              

                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    align="center"
                                >          Ma réunion <Button variant="contained"   style={{margin: '0 10px'}}>
                                Démarrer</Button>
                                      </Typography>  
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


