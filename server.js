const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/pickups';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});