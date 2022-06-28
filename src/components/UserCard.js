import React from 'react'
import Button from './Button'
import UserInformation from './UserInformation'
import './UserCard.css'
const UserCard = ({userData}) => {
  return (
    <div className="userCard">
        <div className="userInitial">
            <h1>{userData.name[0]}</h1>
        </div>
        <UserInformation userInfo={userData}/>
        <Button />
    </div>
  )
}

export default UserCard
