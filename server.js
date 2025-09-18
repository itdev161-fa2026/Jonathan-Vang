// server.js
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/users', (req, res) => {
  return res.status(200).json(req.body);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on ${PORT}`));

