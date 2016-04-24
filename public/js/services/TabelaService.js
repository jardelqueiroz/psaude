angular.module('rio').factory('Tabela', function($resource) {
	return $resource('/tabelas/:id');
});