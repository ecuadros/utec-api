const fs = require('fs');

function listado()
{
}

listado.prototype.execute = function(app)
{
	// Exponer end points
	app.get('/listar',
		function(req, res)
		{
	  		res.type('text/plain');
			const testFolder = process.env.PDFS_PATH;
			var output = "";
			var list = fs.readdirSync(testFolder);
			res.send(list);
		}
	);
};


module.exports = listado;