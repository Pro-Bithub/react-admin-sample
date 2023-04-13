import React, { useState } from 'react';

import { Card, CardContent } from '@mui/material';
import { Title } from 'react-admin'

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

    
    <Card>
        <Title title="Settings" />
        <CardContent>
        <form>
        <div>
          <label htmlFor="notifications">Notificationss</label>
          <input
            type="checkbox"
            name="notifications"
            checked={userPrefs.notifications}
            onChange={updatePrefs}
          />
        </div>
        <div>
          <label htmlFor="audio">Audio</label>
          <input
            type="checkbox"
            name="audio"
            checked={userPrefs.audio}
            onChange={updatePrefs}
          />
        </div>
        <div>
          <label htmlFor="video">Video</label>
          <input
            type="checkbox"
            name="video"
            checked={userPrefs.video}
            onChange={updatePrefs}
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
      </form>
        </CardContent>
    </Card>


   
  );
}

export default SettingsPage;
