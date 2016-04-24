var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
	// obtendo o express
	var app = express();

	// configurando a porta do servidor
	app.set('port', 3000);

	// mapenado a pasta public
	app.use(express.static('./public'));

	// habilitando o framework ejs (gerador de templates em HTML)
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	// habilitando o pacote 'body-parser' e 'method-override' importado via nmp
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());

	// habilitando que outros servidores acessem os servicos
	// depois tem que retirar o * para habilitar apenas a origem do apple.
	app.use(function(req, res, next) {
  		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  		next();
	});

	// habilitando as rotas via Express-load
	load('models', {cwd:'app'}).then('controllers').then('routes').into(app);	



	return app;
};