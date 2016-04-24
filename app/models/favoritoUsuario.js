var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		dataInclusao: {
			type: Date,
			required: true
		},
		itemTabela: {
			type: mongoose.Schema.ObjectId,
			ref: 'ItemTabela',
			required: true
		},
		usuario: {
			type: mongoose.Schema.ObjectId,
			ref: 'Usuario',
			required: true
		}
	});

	return mongoose.model('FavoritoUsuario', schema);
};