const express = require('express');
const routes = require('./routes');
const log = require('./utils/logger');


const { PORT } = process.env;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.listen(PORT, log.dev(`Listening on :${PORT}`));
