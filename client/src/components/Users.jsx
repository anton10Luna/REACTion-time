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

  let form;
  if (props.isAddNewUser) {
    form =
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          New User:
          <input type="text" value={props.user} onChange={(event) => handleChange(event)} />
        </label>
      </form>
  } else {
    form =
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Users:
        <select value={props.user} onChange={(event) => { handleChange(event) }}>
            {props.users.map((user) => (<User user={user} key={user._id} />))}
          </select>
        </label>
        <input type="submit" value="New User" onClick={() => (props.newUser())} />
      </form>
  }

  return (
    <div>
      {form}
    </div>
  )

}

export default Users;
