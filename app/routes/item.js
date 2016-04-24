module.exports = function (app) {
	var controller = app.controllers.item;

	app.route('/itens')
		.get(controller.listar)
		.post(controller.salvar);

	app.route('/itens/:id')
		.get(controller.obter)
		.delete(controller.remover);
		
};