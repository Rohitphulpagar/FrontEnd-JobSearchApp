import Register from "./pages/Register/Register";
import { Form, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import JobDescription from "./pages/JobDescription/JobDescription";
import JobPost from "./pages/JobPost/JobPost";
import { useEffect, useState } from "react";
import axios from "axios";
import JobListing from "./pages/JobListing/JobListing";
import JobEdit from "./pages/JobEdit/JobEdit";
import "./style.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<JobListing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<JobListing />} />
        <Route path="/job" element={<JobPost />} />
        <Route path="/edit-job/:jobId" element={<JobEdit />} />
        <Route path="/description/:jobId" element={<JobDescription />} />
      </Routes>
    </div>
  );
}

export default App;
