const express = require('express');
const app = express();
const memory = require('../src/db/memory');

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'API is running' });
});


app.post('/users', (req, res) => {
  const {id, username, age} = req.body;
  if (age < 18)
    return res.status(400).json({ error: 'L utilisateur doit avoir au moins 18 ans (majeur).'});

  if (memory.getUserByUsername(username)){
    return res.status(400).json({ error: 'Le nom de l utilisateur doit etre unique.'});
  }

  if (memory.getUserByID(id)){
    return res.status(400).json({ error: 'L identifiant de l utilisateur doit etre unique.'});
  }

  memory.addUser({id, username, age});

  return res.status(201).json({id, username, age});
    
})


app.get('/users', (req, res) => {
    
})



module.exports = app;