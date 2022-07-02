const express = require('express');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
const router = require('./src/routers/task');

const app = express();

app.use(express.json());
app.use('/task', router);
app.use(errorMiddleware);

module.exports = app;
