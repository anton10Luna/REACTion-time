import React, { useState, useEffect, useMountEffect } from 'react';

const Game = (props) => {
  const [timeRecords, setTimeRecords] = useState([]);
  const [fastetGameTime, setFastestGameTime] = useState(999999999);
  const [ready, setReady] = useState(false);
  const [goTime, setGoTime] = useState(0);
  const [clickedO, setClickedO] = useState(false);
  const [endTime, setEndTime] = useState(0);
  const [lapTime, setLapTime] = useState(0);
  const [isGoClicked, setIsGoClicked] = useState(false);

  const toggleReady = () => {
    setReady(!ready);
  };

  const toggleOButton = () => {
    setClickedO(!clickedO);
  };

  const getLapTime = () => {
    let lastLap = endTime - goTime;
    setLapTime(lastLap);
    // if (lastLap > 0 && lastLap < fastetGameTime) {
    // if (lastLap >= 0 && lastLap < props.userFastestTime) {
    if (props.userFastestTime === 0) {
      props.setUserFastestTime(lastLap);
      props.saveFastestTime(lastLap);
    } else if (props.userFastestTime !== 0 && lastLap < props.userFastestTime) {
      // setFastestGameTime(lastLap);
      props.setUserFastestTime(lastLap)
      props.saveFastestTime(lastLap);
    }
    // let records = [...timeRecords, lastLap];
    let records = [...props.timeRecords, lastLap];
    setTimeRecords(records);
    props.saveTimeRecords(records);
    toggleReady();
    toggleOButton();
    setEndTime(0);
    setGoTime(0);
  }
  const goClicked = () => {
    setGoTime(Date.now());
    setIsGoClicked(!isGoClicked);
  };

  const oClicked = () => {
    setEndTime(Date.now());
    setIsGoClicked(!isGoClicked);
  };

  let buttons, target;
  if (isGoClicked) {
    target =
      <button onClick={() => { oClicked(); toggleOButton() }}>
        O
      </button>
  } else {
    target = <div></div>
  }

  if (!ready && !clickedO) {
    buttons = <button onClick={() => toggleReady()}>SET</button>
  } else if (ready && !clickedO) {
    buttons =
      <div>
        <button onClick={() => goClicked()}>
          GO!
        </button>
        {target}
      </div>
  } else if (ready && clickedO) {
    buttons =
      <div>
        <button onClick={() => getLapTime()}>show me result</button>
      </div>
  }

  return (
    <div>
      <h1>GAME TIME</h1>
      <div>User Name: {props.user}</div>
      {/* <div>Fastest Time: {fastetGameTime < 999999999 ? fastetGameTime : ''}</div> */}
      <div>Fastest Time: {props.userFastestTime ? props.userFastestTime : ''} ms</div>
      <div>Last Time: {lapTime} ms</div>
      <h1>TIME</h1>
      {buttons}
    </div>
  )
}

export default Game;
