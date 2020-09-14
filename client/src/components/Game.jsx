import React, { useState, useEffect, useMountEffect } from 'react';

const Game = (props) => {
  const [timeRecords, setTimeRecords] = useState([]);
  const [fastetGameTime, setFastestGameTime] = useState(999999999);
  const [ready, setReady] = useState(false);
  const [goTime, setGoTime] = useState(0);
  const [clickedO, setClickedO] = useState(false);
  const [endTime, setEndTime] = useState(0);
  const [lapTime, setLapTime] = useState(0);

  const toggleReady = () => {
    setReady(!ready);
  };

  const toggleOButton = () => {
    setClickedO(!clickedO);
  };

  const getLapTime = () => {
    let lastLap = endTime - goTime;
    setLapTime(lastLap);
    if (lastLap > 0 && lastLap < fastetGameTime) {
      setFastestGameTime(lastLap);
      props.saveFastestTime(lastLap);
    }
    let records = [...timeRecords, lastLap];
    setTimeRecords(records);
    props.saveTimeRecords(records);
    toggleReady();
    toggleOButton();
    setEndTime(0);
    setGoTime(0);
  }
  const goClicked = () => {
    setGoTime(Date.now());
  };

  const oClicked = () => {
    setEndTime(Date.now());
  };

  let buttons;
  if (!ready && !clickedO) {
    buttons = <button onClick={() => toggleReady()}>SET</button>
  } else if (ready && !clickedO) {
    buttons =
      <div>
        <button onClick={() => goClicked()}>
          GO!
        </button>
        <button onClick={() => { oClicked(); toggleOButton() }}>
          O
        </button>
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
      <div>Fastest Time: {fastetGameTime < 999999999 ? fastetGameTime : ''}</div>
      <div>Last Time: {lapTime}</div>
      <h1>TIME</h1>
      {buttons}
    </div>
  )
}

export default Game;


// const Game = (props) => {
//   const [fastetPlayTime, setFastestPlayTime] = useState('');
//   const [ready, setReady] = useState(false);
//   const [setButton, setSetButton] = useState(false);
//   const [setTime, setSetTime] = useState('');
//   const [goButton, setGoButton] = useState(false);
//   const [goTime, setGoTime] = useState('');
//   const [lapTime, setLapTime] = useState('');

//   const getFastestTime = () => {
//     console.log('fastest time: ', fastetPlayTime)
//   };

//   const recordSetTime = () => {
//     setSetTime(Date.now());
//   };

//   const recordGoTime = () => {
//     setGoTime(Date.now());
//   }

//   // let buttons, start, end;
//   // let lap = end - start;

//   const getLapTime = () => {
//     console.log('lap time: ', start - end)
//   };

//   if (!ready) {
//     buttons = <button onClick={() => setReady(!ready)}>SET</button>
//   } else if (ready) {
//     buttons =
//       <div>
//         <button onClick={() => {
//           console.log(Date.now());
//           start = Date.now();
//           console.log('\nstart: ', start);
//           console.log('lap in set: ', lap);
//           console.log('lap func in Set: ', getLapTime());
//           recordSetTime();
//           setSetTime(Date.now());
//           console.log(setTime)
//           setSetButton(true);
//         }}>
//           GO!
//         </button>
//         <button onClick={() => {
//           if (setButton) {
//             console.log(Date.now());
//             end = Date.now();
//             console.log('start in go: ', start);
//             console.log('end: ', end);
//             // lap = end - start;
//             console.log('lap in go: ', lap);
//             console.log('lap func in Go: ', getLapTime());
//             // recordGoTime();
//             setSetButton(false);
//             getFastestTime();
//             getLapTime();
//             console.log(setTime)
//             setReady(!ready);
//           }
//         }}>
//           O
//         </button>
//       </div >
//   }
