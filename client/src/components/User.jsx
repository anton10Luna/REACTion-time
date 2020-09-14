import React, { useState, useEffect, useMountEffect } from 'react';

const User = (props) => {
  // return (
  //   <div>
  //     {props.user.userName}
  //   </div>
  // )

  return (
    <option value={props.user.userName}>{props.user.userName}</option>
  )

}

export default User;