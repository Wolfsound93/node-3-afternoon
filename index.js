require('dotenv').config(); //runs the function to connect the env
const express = require('express');
const massive = require('massive');
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set('db', db).catch(err => console.log(err));
});

app.listen(SERVER_PORT, () => {
  console.log(`SERVER IS ON PORT ${SERVER_PORT}.`);
});
