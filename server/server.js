const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const routes = require('./routes');
const app = express();
const bodyParser = require ('body-parser');
const cors = require('cors');
const helmet = require('helmet');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pickups');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(helmet());

app.use(cors());

app.use(bodyParser.json());

app.use(routes);

app.listen(PORT);
