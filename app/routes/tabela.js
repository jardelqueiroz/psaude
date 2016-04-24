module.exports = function (app) {
	var controller = app.controllers.tabela;

	app.route('/tabelas')
		.get(controller.listar)
		.post(controller.salvar);

	app.route('/tabelas/:id')
		.get(controller.obter)
		.delete(controller.remover);
		
};