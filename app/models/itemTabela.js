var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		codigo: {
			type: String,
			required: true
		},
		nome: {
			type: String
		},
		valor: {
			type: Number
		},
		tabela: {
			type: mongoose.Schema.ObjectId,
			ref: 'Tabela',
			required: true
		},
		item: {
			type: mongoose.Schema.ObjectId,
			ref: 'Item',
			required: true,
		}
	});

	var deepPopulate = require('mongoose-deep-populate')(mongoose);
	schema.plugin(deepPopulate, {});

	return mongoose.model('ItemTabela', schema);
};