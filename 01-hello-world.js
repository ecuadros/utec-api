function main()
{
    var express = require('express'); // include
    var endpoints = require('./endpoints'); // include
    var listado = require('./listado'); // include

    var app = express();
    var endpointslib = new endpoints();
    endpointslib.execute(app);
    
    var milistado = new listado();
    milistado.execute(app);
    
    app.listen(process.env.PORT || 8080);
}

main();