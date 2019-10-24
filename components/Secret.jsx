import React from 'react';
import { Redirect } from 'react-router-dom';

const Secret = props => {
  const { isLogged, setLogged } = props;

  const logOut = e => {
      e.preventDefault();
    setLogged(false);
  };
  return (
    (isLogged) ? (
        <>
          <h3>secret</h3>
          <button onClick={logOut} className='logout'>logOut</button>
        </>
      )
: <Redirect to='/login'/>
  )
};

export default Secret;