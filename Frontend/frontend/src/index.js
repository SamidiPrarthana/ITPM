import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maintenance from './Page/Maintenance';


ReactDOM.render(
  <BrowserRouter>
     
      <Routes>

      <Route path='/' element={<App />} />
      <Route path='/maintenance' element={<Maintenance />} />

      </Routes>
    
  </BrowserRouter>,
document.getElementById('root')
);


