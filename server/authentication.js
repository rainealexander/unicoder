const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// auth0 conrig
const authConfig = {
  issuer: 'https://unicoder-auth-dev.us.auth0.com/',
  audience: 'http://localhost:1355',
  algorithm: ['RS256']
};

const secret = jwksRsa.expressJwtSecret({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5, // might need to increase
  jwksUri: `${authConfig.issuer}.well-known/jwks.json`
});

const authenticated = jwt({ secret, ...authConfig });

module.exports = { authenticated };
