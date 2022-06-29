import React from 'react'
import './UserInformation.css'
import { Link } from 'react-router-dom'

const UserInformation = ({userInfo}) => {
  return (
    <div className='userInfo'>
        <div className='userName'><h3 >{userInfo.name}</h3></div>
        <p className='userUsername'>@{userInfo.username}</p>
        <Link className='userWebsite' to="#">http://{userInfo.website}</Link>
    </div>
  )
}

export default UserInformation