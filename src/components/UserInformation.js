import React from 'react'
import './UserInformation.css'

const UserInformation = ({userInfo}) => {
  return (
    <div className='userInfo'>
        <div className='userName'><h3 >{userInfo.name}</h3></div>
        <p className='userUsername'>@{userInfo.username}</p>
        <p className='userWebsite'>http://{userInfo.website}</p>
    </div>
  )
}

export default UserInformation