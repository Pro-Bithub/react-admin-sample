import * as React from 'react';
import { Grid } from '@mui/material';

import RecentChatsMenuItem from './RecentChatsMenuItem';

export const Groupe = () => (
    <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={3}>
            <RecentChatsMenuItem />
        </Grid>
        <Grid item xs={12} md={9}>
            <RecentChatsMenuItem />
        </Grid>
    </Grid>
);

