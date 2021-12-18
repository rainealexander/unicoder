require('dotenv').config();
const express = require('express');
const path = require('path');

const helmet = require('helmet');
const hpp = require('hpp');
const session = require('cookie-session');
const csurf = require('csurf');

const app = express();

const PORT = process.env.PORT || 1355;

const BUILD_DIR = path.join(__dirname, 'build');
const HTML_PAGE = path.join(BUILD_DIR, 'index.html');

app.use(express.json());
app.use(express.static('public'));
app.use(express.static('build'));

// security configuration
app.use(helmet());
app.use(hpp());

// configure session details
app.use(
  session({
    name: 'session',
    secret: process.env.SESSION_SECRET,
    expires: new Date(Date.now + 24 * 60 * 60 * 1000), //24 hour expiration
  })
);
app.use(csurf());

//app.use(limiter);

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
