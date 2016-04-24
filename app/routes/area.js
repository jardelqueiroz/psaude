module.exports = function (app) {
	var controller = app.controllers.area;

	app.route('/areas')
		.get(controller.listar)
		.post(controller.salvar);

	app.route('/areas/:id')
		.get(controller.obter)
		.delete(controller.remover);
		
};