angular.module('rio').factory('Area', function($resource) {
	return $resource('/areas/:id');
});