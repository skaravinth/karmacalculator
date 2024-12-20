import React from 'react';
import {Box,Container} from '@mui/material';
import{Route,Routes,BrowserRouter} from 'react-router-dom' ;
import Instruction from '../Pages/Instruction/Instruction';
import Vehicle from '../Pages/Vehicles/Vehicles';
const Routess = () => {
  return (
    <BrowserRouter>
      <Container maxwidth="sm" sx={{bgcolor:'red'}}>
        <Routes>
          <Route path="/start" element={<Instruction />} />
          <Route path="/PLAY" element={<Vehicle />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default Routess;
