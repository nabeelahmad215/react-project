import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/page/Dashboard';
import Information from './Components/page/Information';
import Login from './Components/page/Login';
import Reimburstment from './Components/page/Reimburstment';
import Signup from './Components/page/Signup';

const App = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/info' element={<Information />} />
      <Route path='/reimburstment' element={<Reimburstment />} />
    </Routes>
  );
}

export default App;