const express = require('express');

const routes = require('./http/routes/_.routes');

const app = express();

app.use(express.json());
app.use(routes);

module.exports = app;