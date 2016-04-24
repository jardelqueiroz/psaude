angular.module('rio').factory('Login', function($resource) {
	return $resource('/usuarionome/:nome');
});