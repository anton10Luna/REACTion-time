import React, { useState, useEffect, useMountEffect } from 'react';
import axios from 'axios';
import Users from './Users.jsx';
import Game from './Game.jsx';
import EndScreen from './EndScreen.jsx';
import css from './../styles/App.scss'

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

  const updateUser = (userObj) => {
    axios.post('/user', userObj)
      .then(res => console.log)
      .catch(err => console.log);
  };

  const getCurrentUserInfo = () => {
    let userToSet = allUsers.filter(user => {
      return user.userName === userSelected
    });
    userToSet = userToSet.length === 0 ? [{ personalBest: 0, allTimes: 0 }] : userToSet;
    setUserFastestTime(userToSet[0].personalBest ? userToSet[0].personalBest : 0);
    setTimeRecords(userToSet[0].allTimes ? userToSet[0].allTimes : []);
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
    getCurrentUserInfo();
  };

  const trackUserFastestTime = (time) => {
    setUserFastestTime(time);
  };

  const trackTimeRecords = (newRecords) => {
    setTimeRecords(newRecords);
  };

  const moveToQuitScreen = () => {
    updateUser({
      userName: userSelected,
      personalBest: userFastestTime,
      allTimes: timeRecords
    });
    setQuit(!quit);
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
        <Game
          user={userSelected}
          saveFastestTime={trackUserFastestTime}
          saveTimeRecords={trackTimeRecords}
          timeRecords={timeRecords}
          setTimeRecords={setTimeRecords}
          userFastestTime={userFastestTime}
          setUserFastestTime={setUserFastestTime}
        />
        <button onClick={() => moveToQuitScreen()}>Quit</button>
      </div>
  } else if (playTime && quit) {
    screen =
      <div>
        <EndScreen user={userSelected} fastestTime={userFastestTime} times={timeRecords} post={updateUser} />
        <button onClick={() => {
          setPlayTime(!playTime);
          setQuit(!quit)
        }}>
          Home
        </button>
      </div>
  }

  return (
    <div className={css.app}>
      {screen}
    </div>
  )
}

export default App;