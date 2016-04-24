angular.module('rio').factory('Empresa', function($resource) {
	return $resource('/empresas/:id');
});