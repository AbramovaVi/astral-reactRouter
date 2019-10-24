const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const users = [];
let permission = false;

app.use(bodyParser());
app.use(express.static(join(__dirname, 'dist')));

app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.post('/user', (req, res) => {
    users.push(req.body.param);
    res.sendStatus(200);
});

app.post('/auto', (req, res) => {
   const {login, password} = req.body.param;
   // let permission = false;

   users.forEach( i => {
       if (i.login === login && i.password === password) { permission = true; }
       return permission;
   });

   res.send(permission);
});

app.post('/logout', (req, res) =>{
  permission = req.body.param;

  res.send(permission);
});

app.listen(4000, () => console.log('port 4000'));
