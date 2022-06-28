import React from 'react'
import {useParams} from "react-router-dom"

const UserDetailedPage = ({allUsers}) => {

    let {id}= useParams();
  return (
    <div>
      <h1>{id}</h1>
        

        {allUsers.filter(user => user.id===parseInt(id)).map((user,index)=>(

            <div key={index}>
                <ul>
                    <li>{user.name}</li>
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>{user.phone}</li>
                    <li>{user.company.name}</li>
                    <li>{user.website}</li>
                    <li>Address:
                        <ul>
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