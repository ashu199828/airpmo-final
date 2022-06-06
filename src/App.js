import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Datainjestion from "./pages/Datainjestion";
import Jobcard from "./pages/Jobcard.jsx";
import Master from "./pages/Master";
import Qaqc from "./pages/Qaqc";
import Timeline from "./pages/Timeline.jsx";
import Usermanagement from "./pages/Usermanagement";
import Login from "./components/Login";
import { useEffect } from 'react'
import Signup from "./components/Signup";

const App = () => {
  
  return (
    <div>
      
    <BrowserRouter>
      
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobcard" element={<Jobcard />} />
          <Route path="/master" element={<Master />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/datainjestion" element={<Datainjestion />} />
          <Route path="/qaqc" element={<Qaqc />} />
          <Route path="/usermanagement" element={<Usermanagement />} />
        </Routes>
      
    </BrowserRouter>
    </div>
  );
};

export default App;
