var express = require('express'); // include
var app = express();

var endpoints = require('./endpoints'); // include
var endpointslib = endpoints();

endpointslib.show_endpoints(app);
app.listen(process.env.PORT || 8080);
