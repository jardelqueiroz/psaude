angular.module('rio').factory('ProcurandoProcedimento', function($resource) {
	return $resource('/itemtabelaspornome/:tabela/:nome/:codigo');
});

angular.module('rio').factory('ProcurandoProcedimentoPorCodigo', function($resource) {
	return $resource('/itemtabelasporcodigo/:tabela/:codigo');
});