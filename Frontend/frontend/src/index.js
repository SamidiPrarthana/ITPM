import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maintenance from './Page/Maintenance';
import MaintenanceDetails from './Page/MaintenanceDetails';
import UpdateMaintenance from './Page/UpdateMaintenance';


ReactDOM.render(
  <BrowserRouter>
     
      <Routes>

      <Route path='/' element={<App />} />
      <Route path='/Maintenance' element={<Maintenance />} />
      <Route path='/MDetails' element={<MaintenanceDetails />} />
      <Route path='/editMaintenance/:itemId' element={<UpdateMaintenance />} />

      </Routes>
    
  </BrowserRouter>,
document.getElementById('root')
);


