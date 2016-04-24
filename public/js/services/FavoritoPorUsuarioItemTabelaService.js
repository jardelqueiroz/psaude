angular.module('rio').factory('FavoritoPorUsuarioItemTabela', function($resource) {
	return $resource('/favoritoporusuarioitemtabela/:idusuario/:iditemtabela');
	
});