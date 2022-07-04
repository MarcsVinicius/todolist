const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
const router = require('./src/routers/task');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/task', router);
app.use(errorMiddleware);

module.exports = app;
