const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  if (!req.body) {
    return res.status(400).send({ error: 'Request body is missing' });
  }
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).send({ error: 'Username and email are required' });
  }
  // ...
  res.status(201).send({ username, email });
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});