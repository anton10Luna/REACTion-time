import React, { useState, useEffect, useMountEffect } from 'react';

const User = (props) => {
  return (
    <option value={props.user.userName}>{props.user.userName}</option>
  )

}

export default User;