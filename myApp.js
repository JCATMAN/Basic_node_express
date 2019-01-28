const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
