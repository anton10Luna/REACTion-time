import React, { useState, useEffect, useMountEffect } from 'react';
import axios from 'axios';

const App = () => {
  // users state
  const [users, setUsers] = useState([]);
  // current user state
  const [currentUser, setCurrentUser] = useState('James');
  const [fastestTime, setFastestTime] = useState([]);

  // GET users
  // set users state
  const getUsers = () => {
    console.log('getUsers');
    axios.get('/users')
      .then((res) => {
        console.log(res)
        // setUsers(res.data)
      })
      .catch((err) => { console.log('err, from server', err) })
  }

  // USERS
  // show a list of users

  // ADD USER
  // show form
  // add new user

  useEffect(() => { getUsers() }, []);

  return (
    <div>
      {console.log(users)}
      <h1>REACTion Time</h1>
      <div>Users</div>
      <div>Add user</div>
    </div>
  )
}

export default App;