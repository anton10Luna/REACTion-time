import React, { useState, useEffect, useMountEffect } from 'react';
import User from './User.jsx';

const Users = (props) => {

  return (
    <div>
      {props.users.map((user) => (<User user={user} key={user._id} />))}
    </div>
  )
}

export default Users;