module.exports = function (app) {
	var controller = app.controllers.empresa;

	app.route('/empresas')
		.get(controller.listar)
		.post(controller.salvar);

	app.route('/empresas/:id')
		.get(controller.obter)
		.delete(controller.remover);
		
};