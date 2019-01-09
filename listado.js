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
			try
			{
				var list = fs.readdirSync(testFolder);
				res.send(list);
			}
			catch(error)
			{
				res.send("Error:"+error +"(PDFS_PATH does not exit)");
			}
			
		}
	);
	app.get('/async',
		function(req, res)
		{
	  		res.type('text/plain');
			const testFolder = process.env.PDFS_PATH;
			var output = "";

			fs.readdir(testFolder, (err, files) => {
				res.send(files);
				console.log("after send");
			});

			res.send("after async");
		}
	);



};


module.exports = listado;