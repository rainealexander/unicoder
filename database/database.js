const mongoose = require('mongoose');
const { unicodeDataSchema, userDataSchema } = require('./mongoSchemas.js');

// mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.INSTANCE_IP}:27017/unicoder`);
mongoose.connect('mongodb://localhost:27017/unicoder');

const connection = mongoose.connection;

connection.on('error', (error) => { console.error('DB conection error: ', error)});

