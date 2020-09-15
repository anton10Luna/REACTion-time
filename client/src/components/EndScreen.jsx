import React, { useState, useEffect, useMountEffect } from 'react';
import Time from './Time.jsx';

const EndScreen = (props) => {
  console.log(props)

  // const updateUserInfo = () => {
  //   props.post({
  //     userName: props.user,
  //     personalBest: props.fastestTime,
  //     allTimes: props.times
  //   })
  // };

  return (
    <div>
      <div>EndScreen</div>
      <div>USER: {props.user}</div>
      <div>todays's best: {props.fastestTime}</div>
      <div>Times:</div>
      {props.times.map(time => <Time time={time} key={time.toString()} />)}
    </div>
  )
}

export default EndScreen;

// {
//   userName: 'Juan',
//     personalBest: 4567,
//       allTimes: [4567, 8768, 5678, 1888]
// }