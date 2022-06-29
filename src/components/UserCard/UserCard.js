import React from 'react'
import Button from '../Button/Button'
import UserInformation from '../UserInformation/UserInformation'
import './UserCard.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const UserCard = ({userData}) => {
  return (

    <div className="userCard">
        <div className="userInitial">
            <h1>{userData.name[0]}</h1>
        </div>
        <UserInformation userInfo={userData}/>
        <Button userInfo={userData}/>
    </div>
  )
}

export default UserCard
