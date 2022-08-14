import React from 'react'
import {
    ERROR
} from './useDataProvider';
import Content from '../components/Content';
import { Grid, CircularProgress } from '@mui/material';
import moment from 'moment';

const calculateDate = date => {
    var current = moment();//now
    var post_date = moment(date);

    let weeks = current.diff(post_date, 'weeks'),
        days = current.diff(post_date, 'days'),
        hours = current.diff(post_date, 'hours'),
        minutes = current.diff(post_date, 'minutes');

    if(weeks > 0){
        return (weeks === 1) ? `${weeks} week` : `${weeks} weeks`;
    }else if(days > 0){
        return (days === 1) ? `${weeks} day` : `${weeks} days`;
    }else if(hours > 0){
        return (hours === 1) ? `${hours} hour` : `${hours} hours`;
    }else{
        return (minutes === 1) ? `${minutes} minute` : `${minutes} minutes`;
    }

}

export const List = (props) => {

    const {
        status,
        charactersData,
        error,
        elementToObserveRef
    } = props;


  return (
    <section className='characters-list'>
        <Grid container sx={{ mt: 5, justifyContent: 'space-between' }}>
        { charactersData && charactersData.map( character => {

            if( character.story_title !== null ){
                return (
                    <Content
                        key={character.objectID}
                        story_title={character.story_title}
                        story_url={character.story_url}
                        created_at={calculateDate(character.created_at)}
                        author={character.author}
                    />
                )
            }else{
                return null
            }


        } ) }
        </Grid>
        <section ref={elementToObserveRef} className='loading'>
            <p>
                <CircularProgress sx={{ mr: 1 }} />
                Load a new page...
            </p>
            { status === ERROR && (
                // <p>{error.message}</p>
                <p>An error here...</p>
            ) }
        </section>
    </section>
  )
}