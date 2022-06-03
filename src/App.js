import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Employee from './Components/Employee';
import Home from './Components/Home';
import Layout from './Components/Layout';
import NoPage from './Components/NoPage';
import Login from './Components/Login';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route  index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Header />} />
          <Route path="/employee-info" element={<Employee />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;