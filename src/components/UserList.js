import React, { Component } from 'react'
import UserItem from './UserItem'
import users from '../Users.json'



class UserList extends Component {
   
  render() {
    return (
      <div className='container'>
        <div className="row">
        {
            users.results.map(user => {
                return(
                    <UserItem 
                    key={user.id.value}
                    id={user.id.value}
                    img = {user.picture.large}
                    name = {user.name.first + " " + user.name.last}
                    country = {user.location.country}
                    age = {user.dob.age}
                    email = {user.email}
                    phone = {user.phone}
                    />
                )
            })
        }
        </div>
      </div>
    )
  }
}

export default UserList