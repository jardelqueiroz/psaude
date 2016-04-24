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
		area: {
			type: mongoose.Schema.ObjectId,
			ref: 'Area',
			required: true
		}
	});

	return mongoose.model('Item', schema);
};