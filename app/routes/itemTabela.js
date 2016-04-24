module.exports = function (app) {
	var controller = app.controllers.itemTabela;

	app.route('/itemtabelas')
		.get(controller.listar)
		.post(controller.salvar);

	app.route('/itemtabelas/:id')
		.get(controller.obter)
		.delete(controller.remover);

	app.route('/itemtabelaspornome/:tabela/:nome?/:codigo?')
		.get(controller.listarPorTabelaNomeCodigo);
	app.route('/itemtabelasporcodigo/:tabela/:codigo')
		.get(controller.listarPorTabelaNomeCodigo);
				
};