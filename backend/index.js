const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3001;

app.get('/', (req, res) => {
  res.send('Backend API is running!');
});

app.get('/artists', (req, res) => {
  res.json([
    { id: 1, name: 'Chuck Berry' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Little Richard' }
  ]);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
