import React, { useState, useEffect, useMountEffect } from 'react';
import axios from 'axios';
import Users from './Users.jsx';
import Game from './Game.jsx';
import EndScreen from './EndScreen.jsx';

const App = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [fastestTime, setFastestTime] = useState('');
  const [fastestUser, setFastestUser] = useState('');
  const [userSelected, setUserSelected] = useState('');
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

  const handlePlayCLick = () => {
    setPlayTime(!playTime)
  };

  const handleUserSelect = (user) => {
    console.log(user);
    setUserSelected('');
  };

  useEffect(() => { getUsers() }, []);

  let screen;
  if (!playTime && !quit) {
    screen =
      <div>
        <h1>REACTion Time</h1>
        <Users users={allUsers} userChange={handleUserSelect} user={userSelected} />
        <h3>Add user</h3>
        <button onClick={() => setPlayTime(!playTime)}>READY</button>
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