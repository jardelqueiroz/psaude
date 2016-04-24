module.exports = function (app) {
	var controller = app.controllers.usuarioTabela;

	app.route('/usuariotabelas')
		.get(controller.listar)
		.post(controller.salvar);

	app.route('/usuariotabelas/:id')
		.get(controller.obter)
		.delete(controller.remover);

	app.route('/usuariotabelasporusuario/:idusuario')
		.get(controller.listarTabelasPorUsuario)
		
};