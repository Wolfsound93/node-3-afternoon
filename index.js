require('dotenv').config(); //runs the function to connect the env
const express = require('express');
const massive = require('massive');
const productsControler = require('./products_controller');

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
})
  .then(db => {
    app.set('db', db);
  })
  .catch(err => console.log(err));

app.use(express.json());
//END POINTS
app.get('/api/products/:id', productsControler.getOne);
app.get('/api/products', productsControler.getAll);
app.put('/api/products/:id', productsControler.update);
app.post('/api/products', productsControler.create);
app.delete('/api/products/:id', productsControler.delete);

app.listen(SERVER_PORT, () => {
  console.log(`SERVER IS ON PORT ${SERVER_PORT}.`);
});
