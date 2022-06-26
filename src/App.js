import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Components/page/Dashboard';
import EditInformation from './Components/page/EditInformation';
import EmployeeLayout from './Components/page/EmployeeLayout';
import InfoHistory from './Components/page/InfoHistory';
import Information from './Components/page/Information';
import LeaveLayout from './Components/page/LeaveLayout';
import Login from './Components/page/Login';
import Payroll from './Components/page/Payroll';
import PayrollLayout from './Components/page/PayrollLayout';
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
      <Route path='/leave-layout' element={<LeaveLayout />} />
      <Route path='/employee-dashboard' element={<EmployeeLayout />} />
      <Route path='/info' element={<Information />} />
      <Route path='/info-history' element={<InfoHistory />} />
      <Route path='/demo-history' element={<Navigate to='/info-history' />} />
      <Route path='/edit-employee/:id' element={<EditInformation />} />
      <Route path='/promotion' element={<Promotion />} />
      <Route path='/resignation' element={<Resignation />} />
      <Route path='/payroll-dashboard' element={<PayrollLayout />} />
      <Route path='/salary-sheet' element={<Salary />} />
      <Route path='/payroll' element={<Payroll />} />
      <Route path='/reimburstment' element={<Reimburstment />} />
      <Route path='/user-list' element={<UserList />} />
    </Routes>
  );
}

export default App;