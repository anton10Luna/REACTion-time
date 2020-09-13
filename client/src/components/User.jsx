import React, { useState, useEffect, useMountEffect } from 'react';

const User = (props) => {
  return (
    <div>
      {props.user.userName}
    </div>
  )
}

export default User;