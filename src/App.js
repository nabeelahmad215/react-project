import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/page/Dashboard';
import Information from './Components/page/Information';
import Login from './Components/page/Login';
import Payroll from './Components/page/Payroll';
import Promotion from './Components/page/Promotion';
import Reimburstment from './Components/page/Reimburstment';
import Resignation from './Components/page/Resignation';
import Salary from './Components/page/Salary';
import Signup from './Components/page/Signup';
import UserList from './Components/page/UserList';

const App = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/info' element={<Information />} />
      <Route path='/promotion' element={<Promotion />} />
      <Route path='/resignation' element={<Resignation />} />
      <Route path='/user-list' element={<UserList />} />
      <Route path='/salary-sheet' element={<Salary />} />
      <Route path='/payroll' element={<Payroll />} />
      <Route path='/reimburstment' element={<Reimburstment />} />
    </Routes>
  );
}

export default App;