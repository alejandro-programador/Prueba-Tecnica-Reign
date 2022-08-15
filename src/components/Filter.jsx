import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategoryAction } from '../redux/reducers/Filter';
import { useNavigate } from 'react-router-dom';

const Filter = () => {

  const category = useSelector( state => state.Filter.category );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeCategory = (value) => {
    dispatch(changeCategoryAction(value));
  }

  useEffect( () => {
    let filter = localStorage.getItem('reignFilter');
    if(filter) dispatch(changeCategoryAction(JSON.parse(filter)));
  }, [] );

  useEffect( () => {
    navigate(`${category}`);
    localStorage.setItem('reignFilter',JSON.stringify(category));
  },[category] );

  return (
    <Grid container>
      <Grid item xs={12} sm={5} md={3}>
        <FormControl sx={{ width: '100%' }}>
                <InputLabel id="demo-simple-select-label">Select your news</InputLabel>
                <Select 
                    labelId="demo-simple-select-label"
                    label="Select your news"
                    value={category}
                    onChange={ e => changeCategory(e.target.value) }
                >
                    <MenuItem value='angular'>angular</MenuItem>
                    <MenuItem value='react'>react</MenuItem>
                    <MenuItem value='vue'>vue</MenuItem>
                </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default Filter