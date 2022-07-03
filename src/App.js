import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ApprovalLog from './Components/page/ApprovalLog';
import ApprovalLogApproved from './Components/page/ApprovalLogApproved';
import ApprovalLogPending from './Components/page/ApprovalLogPending';
import ApprovalLogReject from './Components/page/ApprovalLogReject';
import Dashboard from './Components/page/Dashboard';
import EditInformation from './Components/page/EditInformation';
import EmployeeLayout from './Components/page/EmployeeLayout';
import InfoHistory from './Components/page/InfoHistory';
import Information from './Components/page/Information';
import Leave from './Components/page/Leave';
import LeaveLayout from './Components/page/LeaveLayout';
import Login from './Components/page/Login';
import Payroll from './Components/page/Payroll';
import PayrollLayout from './Components/page/PayrollLayout';
import Promotion from './Components/page/Promotion';
import PromotionHistory from './Components/page/PromotionHistory';
import Reimburstment from './Components/page/Reimburstment';
import Resignation from './Components/page/Resignation';
import ResignationHistory from './Components/page/ResignationHistory';
import ResignEdit from './Components/page/ResignEdit';
import Salary from './Components/page/Salary';
import Signup from './Components/page/Signup';
import UserList from './Components/page/UserList';

const App = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/employee-dashboard' element={<EmployeeLayout />} />
      <Route path='/info' element={<Information />} />
      <Route path='/info-history' element={<InfoHistory />} />
      <Route path='/demo-history' element={<Navigate to='/info-history' />} />
      <Route path='/edit-employee/:id' element={<EditInformation />} />
      <Route path='/promotion' element={<Promotion />} />
      <Route path='/promotion-history' element={<PromotionHistory />} />
      <Route path='/resignation' element={<Resignation />} />
      <Route path='/resignation-history' element={<ResignationHistory />} />
      <Route path='/demo-resignation-history' element={<Navigate to='/resignation-history' />} />
      <Route path='/edit-resign/:id' element={<ResignEdit />} />
      <Route path='/payroll-dashboard' element={<PayrollLayout />} />
      <Route path='/salary-sheet' element={<Salary />} />
      <Route path='/payroll' element={<Payroll />} />
      <Route path='/reimburstment' element={<Reimburstment />} />
      <Route path='/leave-dashboard' element={<LeaveLayout />} />
      <Route path='/leave-request' element={<Leave />} />
      <Route path='/approval-log' element={<ApprovalLog />} />
      <Route path='/approval-log/pending' element={<ApprovalLogPending />} />
      <Route path='/approval-log/approved' element={<ApprovalLogApproved />} />
      <Route path='/approval-log/reject' element={<ApprovalLogReject />} />
      <Route path='/demo-leave-all' element={<Navigate to='/approval-log' />} />
      <Route path='/user-list' element={<UserList />} />
    </Routes>
  );
}

export default App;