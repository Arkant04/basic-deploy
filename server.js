const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hola mundo mi gente UPDATEV1');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
