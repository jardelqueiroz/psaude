angular.module('rio').factory('Usuario', function($resource) {
	return $resource('/usuarios/:id');
});