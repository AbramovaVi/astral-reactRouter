import React from 'react';
import { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route, Link, NavLink, Redirect} from 'react-router-dom';
import Axios from 'axios';

import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Secret from './Secret';

// const homeProps = {example: 'home'};
// const aboutProps = {example: 'about'};
// const isLogged = false;


const App = () => {
    const [isLogged, setLogged] = useState(false);
    // console.log('home',isLogged);

  // const test = () =>
    useEffect(()=> {
    Axios.post('/checking',null)
      .then( res => setLogged(res.data))
      // .then(console.log('axios',isLogged));
  },[]);


  return (

    <BrowserRouter>
        <header>
        <div>
            <NavLink activeStyle={{ color: 'white'}} to='/home'> Домашняя страница </NavLink>
            <NavLink activeStyle={{ color: 'white'}} to="/signup">Регистрация</NavLink>
            <NavLink activeStyle={{ color: 'white'}} to="/login" exact>Вход</NavLink>
            { isLogged && <NavLink activeStyle={{ color: 'white'}}  to='/secret'>Секретики</NavLink> }
        </div>
        </header>
        <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home">
                <Home isLogged={isLogged}/>
            </Route>
            <Route exact path="/signup" component={SignUp}/>
            <Route path="/login"
                   render={props => <LogIn routerProps={props} setLogged={setLogged} isLogged={isLogged} />}/>
            <Route path='/secret'
                   render={props => <Secret routerProps={props} setLogged={setLogged} isLogged={isLogged} />}/>
        </Switch>
    </BrowserRouter>
)};

export default App;
