/** Imports */
import React from 'react'
import { Typography } from '@mui/material';

/**
 * Component header.
 * @function
 * @name Header
 */
const Header = () => {
  return (
    <>
        <Typography variant='h4' sx={{ fontFamily: 'reign-baskerv1' }}><img src={require('../assets/img/logo.png')} style={{ width: '1rem', marginRight: '.5rem' }} ></img>REIGN NEWS</Typography>
    </>
  )
}

export default Header