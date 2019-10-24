import React from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

const Secret = props => {
  const { isLogged, setLogged } = props;

  const logOut = e => {
      e.preventDefault();
      Axios.post('/logout',{param: false})
        .then(res => setLogged(res.data));
    // setLogged(false);
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