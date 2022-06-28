import React, {useState, useEffect} from 'react'
import UserCard from './components/UserCard';
import axios from 'axios';
import './App.css'


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
    <div className="myApp">
      
     {users.map((user, id)=>(
      <UserCard userData={user} key={id}/>
     ))}
     
        
    </div>
  );
}

export default App;
