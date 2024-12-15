const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Missing error handling for situations where req.body is undefined or incomplete
  // ...
  res.status(201).send(user);
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});