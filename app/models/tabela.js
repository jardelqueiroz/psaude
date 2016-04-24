var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		nome: {
			type: String,
			required: true
		},
		empresa: {
			type: mongoose.Schema.ObjectId,
			ref: 'Empresa',
			required: true
		}
	});

	return mongoose.model('Tabela', schema);
};