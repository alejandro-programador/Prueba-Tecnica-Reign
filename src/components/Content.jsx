import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {API_DATA} from '../static/API_PETITION';

const Content = (props) => {

  const [ news, setNews ] = useState([]);
  const {
      story_title,
      story_url,
      created_at,
      author,
  } = props;

  useEffect( () => {
    const PETITION = async () => {
      const data = await API_DATA().then(response => response.data.hits);
      setNews(data);
    }

    PETITION();
  }, [] );

  return (
    <>
      <Grid item xs={6} sx={{ mb: 3 }}>
            <Grid container sx={{ border: '2px solid', borderColor: 'secondary.dark', borderRadius: '.5rem', width: '95%', height: '8rem' }}>
              <Grid item xs={10} sx={{ pt: 2, px: 2 }}>
                <Grid container>
                  <Grid item xs={12} sx={{ display: 'flex', alignItems: 'end' }}>
                      <AccessTimeIcon sx={{ mr: 1 }} /> 
                      <Typography variant='caption'>{created_at} ago by {author}</Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ pt: 1 }}>
                      <Typography variant='subtitle2'><b>{story_title}</b></Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2} sx={{ backgroundColor: 'secondary.main', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '0 .5rem .5rem 0' }}>
                <FavoriteBorderIcon sx={{ color: 'red', fontSize: '2rem' }} />
              </Grid>
            </Grid>
      </Grid>
    </>
  )
}

export default Content