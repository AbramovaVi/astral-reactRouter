import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

const Secret = props => {
  const { isLogged, setLogged } = props;

  useEffect(()=> {
    Axios.post('/checking',null)
      .then( res => {
        // console.log(res.data),
          setLogged(res.data)
      })
     // .then(console.log('axios',isLogged));
  });

  const logOut = e => {
      e.preventDefault();
      Axios.post('/logout',{param: false})
        .then(res => {
          console.log('responce',res.data);
          setLogged(res.data);
          console.log('islogged',isLogged)
        })
        .then(setLogged(false));
  };
// setLogged(true);
  console.log('secret',isLogged);
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