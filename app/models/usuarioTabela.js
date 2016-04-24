var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		usuario: {
			type: mongoose.Schema.ObjectId,
			ref: 'Usuario',
			required: true
		},
		tabela: {
			type: mongoose.Schema.ObjectId,
			ref: 'Tabela',
			required: true
		}
	});

	var deepPopulate = require('mongoose-deep-populate')(mongoose);
	schema.plugin(deepPopulate, {});

	return mongoose.model('UsuarioTabela', schema);
};