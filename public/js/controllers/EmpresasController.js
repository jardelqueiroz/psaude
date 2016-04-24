angular.module('rio').controller('EmpresasController', function($scope, Empresa) {

	var Proxy = Empresa;

	$scope.filtro = '';
	$scope.mensagem = {texto:''};

	function buscarDados(){
		Proxy.query(
			function(dados) {
				$scope.dados = dados;
				$scope.mensagem = {};
			},
			function(erro){

				$scope.mensagem = {
					texto: 'Não foi possivel obter os registros'					
				};
				console.log("Não foi possivel obter os registros");
				console.log(erro);
			}
		);
	}
	

	$scope.init = function() {
		buscarDados();
	};

	$scope.init();

	$scope.remove = function(dado){
		Proxy.delete({id: dado._id},
			buscarDados,
			function(erro){
				$scope.mensagem = {
					texto: 'Erro ao chamar o metodo delete'					
				};
				console.log('Erro ao chamar o metodo delete');
				console.log(erro);
			}
		);
	};


});