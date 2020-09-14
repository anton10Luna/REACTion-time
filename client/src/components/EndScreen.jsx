import React, { useState, useEffect, useMountEffect } from 'react';
import Time from './Time.jsx';

const EndScreen = (props) => {


  console.log(props)

  return (
    <div>
      <div>EndScreen</div>
      <div>USER: {props.user}</div>
      <div>toodays's best: {props.fastestTime}</div>
      <div>Times:</div>
      {props.times.map(time => <Time time={time} key={time.toString()} />)}
    </div>
  )
}

export default EndScreen;