import React from 'react'
import './UserInformation.css'

const UserInformation = ({userInfo}) => {
  return (
    <div className='userInfo'>
        <h3 className='userName'>{userInfo.name}</h3>
        <p className='userUsername'>@{userInfo.username}</p>
        <p className='userWebsite'>http://{userInfo.website}</p>
    </div>
  )
}

export default UserInformation