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
          <select value={props.user.userSelected} onChange={(event) => { handleChange(event) }}>
          {props.users.map((user) => (<User user={user} key={user._id} />))}
        </select>
      </label>
      <input type="submit" value="Select" />
      <input type="submit" value="New User" onClick={() => (props.newUser())} />
    </form>
  )

}

export default Users;

// return (
  //   <form onSubmit={this.handleSubmit}>
  //     <label>
  //       Pick your human:
  //       <select value={this.state.value} onChange={this.handleChange}>
  //         <option value="grapefruit">Grapefruit</option>
  //         <option value="lime">Lime</option>
  //         <option value="coconut">Coconut</option>
  //         <option value="mango">Mango</option>
  //       </select>
  //     </label>
  //     <input type="submit" value="Submit" />
  //   </form>
  // );