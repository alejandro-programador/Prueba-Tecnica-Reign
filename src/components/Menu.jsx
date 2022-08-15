import React, { useEffect } from 'react'
import { Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeOptAction } from '../redux/reducers/Menu';
import { getFavoritesAction } from '../redux/reducers/MyFaves';

const Menu = () => {

  
  const dispatch = useDispatch();
  const contentType = useSelector( state => state.Menu.contentType );
  
  useEffect( () => {
    dispatch(getFavoritesAction());
  },[] );

  const activeBtn = { borderColor: 'primary.main', color: 'primary.main', width: '100%', textTransform: 'capitalize' };
  const disabledBtn = { borderColor: 'secondary.main', color: 'secondary.dark', width: '100%', textTransform: 'capitalize' };
  const allBtnBorder = { borderRadius: '.3rem 0 0 .3rem' };
  const favesBtnBorder = { borderRadius: '0 .3rem .3rem 0' };

  return (
    <>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid item xs={6} sm={3} md={2}>
          <Button onClick={ () => dispatch(changeOptAction('all')) } sx={ (contentType == 'all') ? {...activeBtn, ...allBtnBorder } : {...disabledBtn, ...allBtnBorder} } variant='outlined'><b>All</b></Button>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Button onClick={ () => dispatch(changeOptAction('my_faves')) } sx={ (contentType == 'my_faves') ? {...activeBtn, ...favesBtnBorder} : {...disabledBtn, ...favesBtnBorder} } variant='outlined'><b>My Faves</b></Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Menu