import React, {useState} from 'react'
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import { Grid } from '@mui/material';
import Filter from './components/Filter';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'

function App() {

  const menuOpts = useSelector( state => state.Menu.contentType );

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
            <Menu />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sx={{ py: 4}}>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Grid item xs={10}>
            {
              (menuOpts == 'all') &&
                <Filter />
            }
            <Outlet />
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  );
}

export default App;
