import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maintenance from './Page/Maintenance';
import MaintenanceDetails from './Page/MaintenanceDetails';
import UpdateMaintenance from './Page/UpdateMaintenance';
import Header from './Components/Header';
import MaintenanceRequestAdminSide from './Components/MaintenanceRequestAdminSide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     
      <Routes>

      <Route path='/' element={<Header />} />
      <Route path='/Maintenance' element={<Maintenance />} />
      <Route path='/MDetails' element={<MaintenanceDetails />} />
      <Route path='/editMaintenance/:itemId' element={<UpdateMaintenance />} />
      <Route path='/MDetailsAdminSide' element={<MaintenanceRequestAdminSide />} />

      </Routes>
    
  </BrowserRouter>,
document.getElementById('root')
);


