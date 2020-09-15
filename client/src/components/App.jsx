import React, { useState, useEffect, useMountEffect } from 'react';
import axios from 'axios';
import Users from './Users.jsx';
import Game from './Game.jsx';
import EndScreen from './EndScreen.jsx';

const App = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [fastestTime, setFastestTime] = useState('');
  const [fastestUser, setFastestUser] = useState('');
  const [userSelected, setUserSelected] = useState('Guest');
  const [userFastestTime, setUserFastestTime] = useState('');
  const [playTime, setPlayTime] = useState(false);
  const [quit, setQuit] = useState(false);
  const [addNewUser, setAddNewUser] = useState(false);
  const [timeRecords, setTimeRecords] = useState([]);

  const getUsers = () => {
    axios.get('/users')
      .then((res) => {
        let usersArray = res.data
        setAllUsers(usersArray)
      })
      .catch((err) => { console.log('err, from server', err) });
  };

  const handlePlayCLick = () => {
    setPlayTime(!playTime);
  };

  const handleUserSelect = (user) => {
    setUserSelected(user);
  };

  const toggleAddNewUser = () => {
    setAddNewUser(!addNewUser);
  };

  const moveToPlayScreen = () => {
    setPlayTime(!playTime);
    setAddNewUser(false);
  };

  const trackUserFastestTime = (time) => {
    setUserFastestTime(time);
  };

  const trackTimeRecords = (newRecords) => {
    setTimeRecords(newRecords);
  };

  useEffect(() => { getUsers() }, []);

  let screen;
  if (!playTime && !quit) {
    screen =
      <div>
        <h1>REACTion Time</h1>
        <div>{userSelected}</div>
        <Users users={allUsers} userChange={handleUserSelect} user={userSelected} newUser={toggleAddNewUser} isAddNewUser={addNewUser} />
        <button onClick={() => moveToPlayScreen()}>READY</button>
      </div>
  } else if (playTime && !quit) {
    screen =
      <div>
        <Game user={userSelected} saveFastestTime={trackUserFastestTime} saveTimeRecords={trackTimeRecords} />
        <button onClick={() => setQuit(!quit)}>Quit</button>
      </div>
  } else if (playTime && quit) {
    screen =
      <div>
        <EndScreen user={userSelected} fastestTime={userFastestTime} times={timeRecords} />
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