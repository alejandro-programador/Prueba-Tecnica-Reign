import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
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
    navigate(`${category}`);
  },[category] );

  return (
    <FormControl sx={{ width: '20%' }}>
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
  )
}

export default Filter