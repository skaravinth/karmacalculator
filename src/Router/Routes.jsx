import React from 'react';
import {Box} from '@mui/material'
import{Route,Routes,BrowserRouter} from 'react-router-dom' 
import Instruction from '../Pages/Instruction'
import Vehicle from '../Pages/Vehicles'
const Routess = () => {
  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/start" element={<Instruction />} />
          <Route path="/" element={<Vehicle />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default Routess;
