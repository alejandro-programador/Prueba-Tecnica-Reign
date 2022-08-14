import React, {useState} from 'react'
import {
    ERROR
} from './useDataProvider';
import Content from '../components/Content';
import { Grid, CircularProgress, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export const List = (props) => {

    const MY_FAVES_DATA = useSelector( state => state.MyFaves.myFaves );
    const menuOpts = useSelector( state => state.Menu.contentType );

    const {
        status,
        charactersData,
        error,
        elementToObserveRef
    } = props;


  return (
    <section className='characters-list'>
        <Grid container sx={{ mt: 5, justifyContent: 'space-between' }}>
        { charactersData && menuOpts == 'all' && charactersData.map( character => {

            if( character.story_title !== null ){
                return (
                    <Content
                        key={character.objectID}
                        id={character.objectID}
                        story_title={character.story_title}
                        story_url={character.story_url}
                        created_at={character.created_at}
                        author={character.author}
                    />
                )
            }else{
                return null
            }


        } ) }

        { 
            (!MY_FAVES_DATA) &&
            <Typography>You not have favorites...</Typography>
        }
        
        
        { MY_FAVES_DATA && MY_FAVES_DATA.length > 0 && menuOpts == 'my_faves' && MY_FAVES_DATA.map( character => {

            if( character.story_title !== null ){
                return (
                    <Content
                        key={character.objectID}
                        id={character.objectID}
                        story_title={character.story_title}
                        story_url={character.story_url}
                        created_at={character.created_at}
                        author={character.author}
                    />
                )
            }else{
                return null
            }

        } ) }
        </Grid>
        
        <section ref={elementToObserveRef} className='loading'>
            {/* <p>
                <CircularProgress sx={{ mr: 1 }} />
                Load a new page...
            </p>
            { status === ERROR && (
                // <p>{error.message}</p>
                <p>An error here...</p>
            ) } */}
        </section>
    </section>
  )
}