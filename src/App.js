import React, {useState, useEffect, Fragment} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Error from '././components/Error'
import axios from 'axios';
import './App.css'
import UserDetailedPage from './components/UserDetailedPage/UserDetailedPage';

function App() {
  const[users, setUsers]=useState([]);
  useEffect(()=>{
   let userInfo;
   axios("https://jsonplaceholder.typicode.com/users").then(
     response=>{
       userInfo=response.data
       setUsers(userInfo)
     })
  }, [])
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home allUsers={users}/>}/>
        <Route path="/UserDetailedPage/:id" element={<UserDetailedPage allUsers={users}/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}
export default App;
