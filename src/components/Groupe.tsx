import * as React from 'react';
import { Grid } from '@mui/material';

import Welcome from './Welcome';

export const Groupe = () => (
    <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={3}>
            <Welcome />
        </Grid>
        <Grid item xs={12} md={9}>
            <Welcome />
        </Grid>
    </Grid>
);

