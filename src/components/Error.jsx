/** Imports */
import { Typography, Grid } from '@mui/material';
import React from 'react';
import Header from './Header';

/**
 * Component error.
 * @function
 * @name Error
 */
const Error = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ py: 4, boxShadow: 3 }}>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Grid item xs={10}>
            <Header />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sx={{ py: 4}}>
        <Grid container sx={{ justifyContent: 'center', textAlign: 'center' }}>
          <Grid item xs={10}>
            <Typography variant="h6">404 not found</Typography>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default Error