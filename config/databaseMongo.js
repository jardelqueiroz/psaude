var mongoose = require('mongoose');

module.exports = function (uri) {

	mongoose.connect(uri, {server: {poolSize:15}});

	mongoose.connection.on('connected', function() {
		console.log('Mongoose conectado em ' + uri);
	});


	mongoose.connection.on('disconnected', function() {
		console.log('Mongoose desconectado de ' + uri);
	});


	mongoose.connection.on('error', function() {
		console.log('Mongoose: erro de conexao em ' + uri);
	});

	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log('A aplicacao foi finalizada pelo control c');
			process.exit(0);
		} );
	});
}