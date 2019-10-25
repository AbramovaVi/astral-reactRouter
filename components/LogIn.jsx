import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Axios from "axios";


const LogIn = props => {
    const { isLogged, setLogged } = props;
    const data = {
        login: '',
        password: ''
    };

    const [authoriz, setAuthoriz] = useState(data);

    const changeHandler = e => {
        const { name, value } = e.target;
        setAuthoriz( prevState => ({ ...prevState, [name]: value }));
    };

    const authorization = e => {
      e.preventDefault();
      Axios.post('/auto', { param: authoriz })
        .then(res => setLogged(res.data));
    };
    console.log('login',isLogged);

    return ( !isLogged ?
      <>
        <h3>login</h3>
          <form onSubmit={authorization}>
            <input placeholder='login' name='login' onChange={changeHandler}/>
            <input placeholder='password' name='password' onChange={changeHandler}/>
            <button>LogIn</button><br/>
          </form>
        <span>Еще нет аккаунта?<Link to='/signup'>Регистрация</Link></span>

      </>
        : <Redirect to='/home'/>
)};
export default LogIn;