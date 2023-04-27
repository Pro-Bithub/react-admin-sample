import React from 'react';
import {Grid ,  Card, CardContent, CardHeader,Box } from '@mui/material';
import {
    useTranslate
  } from 'react-admin';
 import EventIcon from '@material-ui/icons/Event';
import PlanifierForm from './PlanifierForm';

const Planifier = (props) => {
    const translate = useTranslate();
  const handleClick = () => {
    // Do something when the button is clicked
    // For example, navigate to "/profile"
    console.log("Button clicked!");

  };

    return (
        <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={12}>
        <Box display="flex" alignItems="center">
               <Box ml={2} mr={2} display="flex">
                   <EventIcon color="disabled" fontSize="large" />
               </Box>
               Programmer la réunion
            
           </Box>
        </Grid>
        <Grid item xs={12} md={12}>
        <Card>
 
    <CardContent>
    <PlanifierForm {...props} />

    </CardContent>
  </Card>
        </Grid>

        </Grid>
    );
  }
  
export default Planifier;
