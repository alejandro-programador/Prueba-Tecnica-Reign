import React from 'react'
import { Button } from '@mui/material'

const Menu = () => {
  return (
    <>
        <Button sx={{ borderColor: 'primary.main', color: 'primary.main', width: '10%', borderRadius: '.3rem 0 0 .3rem', textTransform: 'capitalize' }} variant='outlined'><b>All</b></Button>
        <Button sx={{ borderColor: 'secondary.main', color: 'secondary.dark', width: '10%', borderRadius: '0 .3rem .3rem 0', textTransform: 'capitalize' }} variant='outlined'><b>My Faves</b></Button>
    </>
  )
}

export default Menu