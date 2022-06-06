import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/page/Dashboard';
import Login from './Components/page/Login';
import Signup from './Components/page/Signup';

const App = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
}

export default App;