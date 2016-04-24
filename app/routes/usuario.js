module.exports = function (app) {
	var controller = app.controllers.usuario;

	app.route('/usuarios')
		.get(controller.listar)
		.post(controller.salvar);

	app.route('/usuarios/:id')
		.get(controller.obter)
		.delete(controller.remover);

	app.route('/usuarionome/:nome')
		.get(controller.obterPeloNome)
	app.rout
		
};