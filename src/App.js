import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Layout from './components/layout';
import Users from './pages/users';
import Dashboard from './pages/dashboard';
import CreateUser from './pages/createUser';
import UpdateUser from './pages/upadateUser';
import DeleteUser from './pages/deleteUser';

function App() {
  return (
    <div className="container">
      <h1>CRUD Operation in MERN Stack</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/updateuser" element={<UpdateUser />} />
            <Route path="/deleteuser" element={<DeleteUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
