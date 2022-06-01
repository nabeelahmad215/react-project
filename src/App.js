import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Layout from './Components/Layout';
import NoPage from './Components/NoPage';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/dashboard" element={<Home />} />
          <Route index element={<Header />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;