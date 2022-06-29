
import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';
import './Home.css'

const Home = ({allUsers}) => {
    
 

  return (
    <div className='myApp'>
     
      {allUsers.map((user, id)=>(
      <UserCard userData={user} key={id}/>
     ))}
    </div>
  )
}

export default Home