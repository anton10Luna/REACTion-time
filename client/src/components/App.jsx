import React, { useState, useEffect, useMountEffect } from 'react';
import axios from 'axios';
import Users from './Users.jsx';
import Game from './Game.jsx';
import EndScreen from './EndScreen.jsx';

const App = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [fastestTime, setFastestTime] = useState('');
  const [fastestUser, setFastestUser] = useState('');
  const [userSelected, setuserSelected] = useState('');
  const [userFastestTime, setUserFastestTime] = useState('');
  const [playTime, setPlayTime] = useState(false);
  const [quit, setQuit] = useState(false);

  const getUsers = () => {
    console.log('getUsers');
    axios.get('/users')
      .then((res) => {
        let usersArray = res.data
        setAllUsers(usersArray)
      })
      .catch((err) => { console.log('err, from server', err) })
  };

  // handleUserSelection

  const handlePlayCLick = () => {
    setPlayTime(!playTime)
  };

  // USERS
  // show a list of users

  // ADD USER
  // show form
  // add new user

  useEffect(() => { getUsers() }, []);

  let screen;
  if (!playTime && !quit) {
    screen =
      <div>
        <h1>REACTion Time</h1>
        <h3>Users</h3>
        <Users users={allUsers} />
        <h3>Add user</h3>
        <button onClick={() => setPlayTime(!playTime)}>PLAY</button>
      </div>
  } else if (playTime && !quit) {
    screen =
      <div>
        <Game />
        <button onClick={() => setQuit(!quit)}>Quit</button>
      </div>
  } else if (playTime && quit) {
    screen =
      <div>
        <EndScreen />
        <button onClick={() => {
          setPlayTime(!playTime);
          setQuit(!quit)
        }}>
          Home
        </button>
      </div>
  }

  return (
    <div>
      {screen}
    </div>
  )
}

export default App;