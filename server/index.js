const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '../client/dist/'));

const port = 3000;

app.listen(port, function () {
  console.log(`App is listening on ${port}!`);
});

module.exports = app;