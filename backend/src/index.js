const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Atlas API is running' });
});

app.get('/api/welcome', (req, res) => {
  res.json({ message: 'Welcome to Atlas!' });
});

app.listen(PORT, () => {
  console.log(`Atlas backend running on port ${PORT}`);
});
