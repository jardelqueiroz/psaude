angular.module('rio').factory('Contato', function($resource) {
	return $resource('/contatos/:id');
});