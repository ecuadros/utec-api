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
// 			const testFolder = '/home/ecuadros/.';
			const testFolder = '/home/ecuadros/Articles/Curricula/Curricula.in/lang/Espanol/cycle/2018-I/Syllabi/Computing/CS/';
			var output = "";
			var list = fs.readdirSync(testFolder);
			res.send(list);
			
// 	  		fs.readdir(testFolder, (err, files) => 
// 	  		{
// 			  if(err)
// 			  { console.log("Error:"+err);	}
// 			  else
// 			  {
// 			      res.send(files);
// 			  }
// 			})
		}
	);
};


module.exports = listado;