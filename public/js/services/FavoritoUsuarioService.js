angular.module('rio').factory('FavoritoUsuario', function($resource) {
	return $resource('/favoritousuarios/:id');
});