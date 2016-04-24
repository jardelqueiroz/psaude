module.exports = function (app) {
	var controller = app.controllers.favoritoUsuario;

	app.route('/favoritousuarios')
		.get(controller.listar)
		.post(controller.salvar);

	app.route('/favoritousuarios/:id')
		.get(controller.obter)
		.delete(controller.remover);
	app.route('/favoritoporusuarioitemtabela/:idusuario/:iditemtabela')
		.get(controller.obterporusuarioitemtabela);
	
		
};