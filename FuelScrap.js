const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Health is OK!');
  console.log('Health is OK!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});