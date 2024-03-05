import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Weather from './Components/Weather/Weather';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Weather />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
