import React, {useState, useEffect} from 'react'
import UserCard from './components/UserCard';
import axios from 'axios'


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
      <h1>React</h1>
     {users.map((user, id)=>(
      <UserCard userData={user} key={id}/>
     ))}
     
        
    </div>
  );
}

export default App;
