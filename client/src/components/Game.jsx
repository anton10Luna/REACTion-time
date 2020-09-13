import React, { useState, useEffect, useMountEffect } from 'react';

const Game = (props) => {

  return (
    <div>
      {console.log(props)}
      <h1>GAME TIME</h1>
      <div>User Name</div>
      <div>Fastest Time:</div>
      <div>Last Time:</div>
      <h1>TIME</h1>
      <button>Ready</button>
      <button>Set</button>
      <button>GO!</button>
      <button >Quit</button>
    </div>
  )
}

export default Game;

// onClick={() => props.toggle.toggleQuit()}