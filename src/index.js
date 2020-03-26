const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const routes = require('./routes');
const log = require('./utils/logger');

const { PORT } = process.env;

const app = express();

app.set('trust proxy', 1);
app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(PORT, log.prod(`Listening on: ${PORT}`));
