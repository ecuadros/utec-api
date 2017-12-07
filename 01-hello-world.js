var express = require('express'); // include
var endpoints = require('./endpoints'); // include

var app = express();
var endpointslib = new endpoints();

endpointslib.execute(app);

app.listen(process.env.PORT || 8080);
