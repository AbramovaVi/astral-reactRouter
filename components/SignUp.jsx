import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";

const SignUp = () => {
    const user = {
        login: '',
        password: '',
        email: ''
    };
    const [userInfo, setUserInfo ] = useState(user);

    const changeHandler = e => {
        const { name, value } = e.target;
        setUserInfo( prevState => ({ ...prevState, [name]: value }));
    };

    const createUser = e => {
        e.preventDefault();
        Axios.post('/user', { param: userInfo })
            .then(res => console.log(res));
    };
    return(
    <>
        <h3>sign up</h3>
        <form onSubmit={createUser} >
              <input placeholder='login' name='login' onChange={changeHandler} required/>
              <input placeholder='password' name='password' onChange={changeHandler} required/>
              <input placeholder='email' name='email' onChange={changeHandler} required/>
            <button>sign up</button><br/>
        </form>
        <span>Уже есть аккаунт?<Link to='/login'>Войти</Link></span>
    </>
    )};

export default SignUp;