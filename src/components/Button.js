import React from 'react'
import './Button.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    
  } from "react-router-dom";
import UserDetailedPage from './UserDetailedPage'


const Button = ({userInfo}) => {
   
  return (
    <div className='button'>
      <Link to={`/UserDetailedPage/${userInfo.id}`} className="link">MORE DETAILS</Link>
    </div>
  )
}

export default Button
