angular.module('rio').factory('Item', function($resource) {
	return $resource('/itens/:id');
});