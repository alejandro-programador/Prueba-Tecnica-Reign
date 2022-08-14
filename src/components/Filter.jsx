import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Filter = () => {

  const [ category, setCategory ] = useState('');

  return (
    <FormControl sx={{ width: '20%' }}>
            <InputLabel id="demo-simple-select-label">Select your news</InputLabel>
            <Select 
                labelId="demo-simple-select-label"
                label="Select your news"
                value={category}
                onChange={ e => setCategory(e.target.value) }
            >
                <MenuItem value='angular'>angular</MenuItem>
                <MenuItem value='react'>react</MenuItem>
                <MenuItem value='vue'>vue</MenuItem>
            </Select>
    </FormControl>
  )
}

export default Filter