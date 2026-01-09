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
    return res.status(400).json({ error: 'Le nom de l utilisateur doit être unique.'});
  }

  if (memory.getUserByID(id)){
    return res.status(400).json({ error: 'L identifiant de l utilisateur doit être unique.'});
  }

  memory.addUser({id, username, age});

  return res.status(201).json({id, username, age});
    
})


app.get('/userByID/:id', (req, res) => {
    const user = memory.getUserByID(req.params.id);
    if (!user)
        return res.status(404).json({ error: 'Utilisateur introuvable!' });
    return res.json(user);
})


app.get('/userByUsername/:username', (req, res) => {
    const user = memory.getUserByUsername(req.params.username);
    if (!user)
        return res.status(404).json({ error: 'Utilisateur introuvable!' });
    return res.json(user);
})

app.put('/users/:id', (req, res) => {
    const { username, age } = req.body; 
    const id = req.params.id;

    const user = memory.getUserByID(id);
    if(!user)
      return res.status(404).json({ error: 'Utilisateur introuvable!' });

    if(username && username !== user.username){
      if(memory.getUserByUsername(username))
        return res.status(400).json({ error: 'Le nom de l utilisateur doit être unique.'});
    }

    if (age && age < 18) {
        return res.status(400).json({ error: "L utilisateur doit avoir au moins 18 ans (majeur)." });
    }
    return res.json(memory.updateUserByID(id, { username, age }));

})

app.delete('/users/:id', (req, res) => {
  const user = memory.getUserByID(req.params.id);
  if(!user)
    return res.status(404).json({ error: 'Utilisateur introuvable!' });

  memory.deleteUserByID(req.params.id);
  return res.status(204).send();
})
module.exports = app;