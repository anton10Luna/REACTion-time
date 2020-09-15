import React, { useState, useEffect, useMountEffect } from 'react';
import App from './App.jsx';
import User from './User.jsx';

const Users = (props) => {

  const handleChange = (event) => {
    props.userChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label>
        Users:
          <select value={props.user} onChange={(event) => { handleChange(event) }}>
          {props.users.map((user) => (<User user={user} key={user._id} />))}
        </select>
      </label>
      <input type="submit" value="New User" onClick={() => (props.newUser())} />
    </form>
  )

}

export default Users;
