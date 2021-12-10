require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 1355;

const BUILD_DIR = path.join(__dirname, 'build');
const HTML_PAGE = path.join(BUILD_DIR, 'index.html');

app.use(express.json());
app.use(express.static('public'));
app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(HTML_PAGE, (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
