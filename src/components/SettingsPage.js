import React, { useState } from 'react';

import {Grid , Card, CardContent ,Checkbox,Box} from '@mui/material';
import { Title } from 'react-admin'
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
const styles = {
  backgroundColor: '#3b33aa',
  margin: '10px'
};
function SettingsPage() {
  // Définir l'état initial des préférences utilisateur
  const [userPrefs, setUserPrefs] = useState({
    notifications: true,
    audio: true,
    video: true,
    security: 'medium',
  });

  // Fonction pour mettre à jour les préférences utilisateur
  function updatePrefs(event) {
    const { name, value, type, checked } = event.target;

    setUserPrefs((prevPrefs) => ({
      ...prevPrefs,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  return (
    <Grid container spacing={2} mt={1}>
         <Grid item xs={12} md={12}>
         <Box display="flex" alignItems="center">
                <Box ml={2} mr={2} display="flex">
                    <SettingsIcon color="disabled" fontSize="large" />
                </Box>
               Paramètres
             
            </Box>
         </Grid>
        <Grid item xs={12} md={9}>
        <Card>
        <Title title="Settings" />
        <CardContent>
        <form>
        <div>
          <label htmlFor="notifications">Notifications</label>
          <Checkbox
  name="notifications"
  checked={userPrefs.notifications}
  onChange={updatePrefs} label="Large" size="lg"
/>
        </div>
        <div>
          <label htmlFor="audio">Audio</label>
<Checkbox
  name="audio"
  checked={userPrefs.audio}
  onChange={updatePrefs} label="Large" size="lg"
/>

        </div>
        <div>
          <label htmlFor="video">Video</label>
     
          <Checkbox
  name="video"
  checked={userPrefs.video}
  onChange={updatePrefs} label="Large" size="lg"
/>

        </div>
        <div>
          <label htmlFor="security">Security</label>
          <select
            name="security"
            value={userPrefs.security}
            onChange={updatePrefs}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <Button variant="contained"  size="large" style={{  backgroundColor: styles.backgroundColor, margin: styles.margin  }}  >
        Enregistrer
</Button>
      </form>
        </CardContent>
    </Card>
        </Grid>
       
    </Grid>
    
   


   
  );
}

export default SettingsPage;
