/** Imports */
import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {API_DATA} from '../static/API_PETITION';
import { styled } from '@mui/system';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteAction, deleteFavoriteAction } from '../redux/reducers/MyFaves';

/**
 * stylized favorites icon (only border).
 * @const
 */
const FavesBorderIcon = styled(FavoriteBorderIcon)(({ theme }) => `
  color: red;
  font-size: 2rem;
  cursor: pointer;
`)

/**
 * stylized favorites icon.
 * @const
 */
const FavesIcon = styled(FavoriteIcon)(({ theme }) => `
  color: red;
  font-size: 2rem;
  cursor: pointer;
`)

/**
 * stylized grid.
 * @const
 */
const ContentGrid = styled(Grid)(({ theme }) => `
  font-family: Roboto;
  :hover{
      opacity: .6;
  }
`)

/**
 * Component content.
 * @function
 * @name Content
 */
const Content = (props) => {

  const [faveIcon, setFaveIcon] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { story_title, story_url, created_at, author, id } = props;

  const dispatch = useDispatch();
  const menuOpts = useSelector( state => state.Menu.contentType );

  /**
    * Add a post to favorite.
    * @function
    * @name ADD_TO_FAVES
    * @param {Object} data 
   */
  const ADD_TO_FAVES = data => {
    setIsFavorite(true);

    let faves = localStorage.getItem('my_faves'),
        newPost;

    if( faves ){
      newPost = [
        ...JSON.parse(faves),
        data
      ];
    }else{
      newPost = [
        data
      ]
    }

    localStorage.setItem('my_faves', JSON.stringify(newPost));
  }

  /**
    * Delete a post from favorites.
    * @function
    * @name DELETE_OF_FAVES
    * @param {Object} data 
   */
  const DELETE_OF_FAVES = data => {
    let faves = JSON.parse(localStorage.getItem('my_faves'));
    const NEW_FAVES_LIST = faves.filter((item) => item.story_title !== data.story_title);

    localStorage.removeItem('my_faves');
    localStorage.setItem('my_faves',JSON.stringify(NEW_FAVES_LIST));
  }

  /**
    * Return a calculated date.
    * @function
    * @name RETURN_DATE
   */
  const RETURN_DATE = (weeks, days, hours, minutes, seconds) => {
    
    if(weeks > 0){
      return (weeks === 1) ? `${weeks} week` : `${weeks} weeks`;
    }else if(days > 0){
        return (days === 1) ? `${weeks} day` : `${weeks} days`;
    }else if(hours > 0){
        return (hours === 1) ? `${hours} hour` : `${hours} hours`;
    }else if(minutes > 0){
        return (minutes === 1) ? `${minutes} minute` : `${minutes} minutes`;
    }else{
        return (seconds === 1 || seconds <= 0) ? `1 second` : `${seconds} seconds`;
    }

  }

  /**
    * Calculate and compare the post date with the current date.
    * @function
    * @name CALCULATE_DATA
   */
  const CALCULATE_DATA = date => {
    var current = moment();
    var post_date = moment(date);

    let weeks = current.diff(post_date, 'weeks'),
        days = current.diff(post_date, 'days'),
        hours = current.diff(post_date, 'hours'),
        minutes = current.diff(post_date, 'minutes'),
        seconds = current.diff(post_date, 'seconds');

    return RETURN_DATE(weeks, days, hours, minutes, seconds);
  }

  /**
    * Action on click in the full heart.
    * @function
    * @name FULL_ICON
   */
  const FULL_ICON = () => {
    dispatch(deleteFavoriteAction(props));
    setFaveIcon(false);
  }

  /**
    * Action on click in the bordered heart.
    * @function
    * @name BORDER_ICON
   */
  const BORDER_ICON = () => {
    dispatch(addFavoriteAction(props));
    setFaveIcon(true);
  }

  /**
    * Open link in new window.
    * @function
    * @name OPEN_LINK
   */
  const OPEN_LINK = url => {
    window.open(url, '_blank');
  }

  return (
    <>
      <ContentGrid item xs={12} md={6} sx={{ mb: 3, overflow: 'hidden', cursor: 'pointer' }}>
            <Grid container sx={{ border: '2px solid', borderColor: 'secondary.dark', borderRadius: '.5rem', width: '95%', height: '8rem' }}>
              <Grid item xs={10} sx={{ pt: 2, px: 2 }} onClick={ () => OPEN_LINK(story_url)}>
                <Grid container>
                  <Grid item xs={12} sx={{ display: 'flex', alignItems: 'end' }}>
                      <AccessTimeIcon sx={{ mr: 1 }} /> 
                      <Typography variant='caption'>{CALCULATE_DATA(created_at)} ago by {author}</Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ pt: 1 }}>
                      <Typography variant='subtitle2' sx={{ color: 'secondary.dark' }}><b>{story_title}</b></Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2} sx={{ backgroundColor: 'secondary.main', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '0 .5rem .5rem 0', height: '100%' }}>
                {
                  (menuOpts == 'my_faves') &&
                  <FavesIcon onClick={ () => dispatch(deleteFavoriteAction(props)) } />
                }
                {
                  (menuOpts == 'all') ? 
                    (!faveIcon && !isFavorite) ?
                      <FavesBorderIcon onClick={ () => BORDER_ICON() } />
                    :
                      <FavesIcon onClick={ () => FULL_ICON() } />
                  :
                  null
                }
              </Grid>
            </Grid>
      </ContentGrid>
    </>
  )
}

export default Content