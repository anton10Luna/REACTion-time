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
    // toggleAddNewUser();
  };


  useEffect(() => { getUsers() }, []);

  let screen;
  if (!playTime && !quit) {
    screen =
      <div>
        <h1>REACTion Time</h1>
        <Users users={allUsers} userChange={handleUserSelect} user={userSelected} newUser={toggleAddNewUser} />
        <button onClick={() => moveToPlayScreen()}>READY</button>
      </div>
  } else if (playTime && !quit) {
    screen =
      <div>
        <Game user={userSelected} />
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

  // if (addNewUser) {
  //   screen =
  //     <div>
  //       Add new User
  //     </div>
  // }

  return (
    <div>
      {screen}
    </div>
  )
}

export default App;