const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js')

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/cows', (req, res) => {
  db.getAllCows((data) => { res.send(data) })
})

app.post('/api/cows', (req, res) => {
  console.log(req.body);
  db.addCow(req.body, (data) => { res.send(data) })
})

app.put('/api/cows', (req, res) => {
  console.log(req.body);
  db.editCow(req.body, (data) => { res.send(data) })
})

app.post('/api/cows/delete', (req, res) => {
  console.log(req.body);
  db.deleteCow(req.body, (data) => { res.send(data) })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
