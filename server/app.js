const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 1355;

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
