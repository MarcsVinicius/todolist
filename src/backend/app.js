const express = require('express');
const router = require('./src/routers/task');

const app = express();

app.use(express.json());
app.use('/task', router);

module.exports = app;
