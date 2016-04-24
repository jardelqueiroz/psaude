angular.module('rio').factory('UsuarioTabela', function($resource) {
	return $resource('/usuariotabelas/:id');
});

angular.module('rio').factory('UsuarioTabelaPorUsuario', function($resource) {
	return $resource('/usuariotabelasporusuario/:idusuario');
});
