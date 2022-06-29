import React from 'react'
import {useParams} from "react-router-dom"
import './userdetailedpage.css'

const UserDetailedPage = ({allUsers}) => {

    let {id}= useParams();
  return (
    <div className='container'>
      
        

        {allUsers.filter(user => user.id===parseInt(id)).map((user,index)=>(

            <div key={index} >
                <ul className='upperList'>
                    <li>naem: {user.name}</li>
                    <li>username: {user.username}</li>
                    <li>email: {user.email}</li>
                    <li>phone: {user.phone}</li>
                    <li>company: {user.company.name}</li>
                    <li>website: {user.website}</li>
                    <li>Address:
                        <ul className='lowerList'>
                            <li>{user.address.street}</li>
                            <li>{user.address.suite}</li>
                            <li>{user.address.city}</li>
                            <li>{user.address.zipcode}</li>
                        </ul>
                    </li>

                </ul>

                

            </div>

        ))}
        
         
    </div>
  );
};

export default UserDetailedPage