angular.module('rio').factory('ItemTabela', function($resource) {
	return $resource('/itemtabelas/:id');
});