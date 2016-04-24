angular.module('rio').controller('TabelaController', 
	function($scope, $routeParams, Tabela, Empresa) {

		var Proxy = Tabela;

		$scope.salva = function(){
			$scope.dado.$save()
				.then(function() {
					$scope.mensagem = {
						texto: 'Registro salvo com sucesso.'
					};
					$scope.dado = new Proxy();
				})
				.catch(function(erro) {
					$scope.mensagem = {
						texto: 'Não foi possível salvar o registro.'
					};
					console.log(erro);	
				});
		};

		Empresa.query(
			function(dados) {
				$scope.empresas = dados;
				$scope.mensagem = {};
			},
			function(erro){

				$scope.mensagem = {
					texto: 'Não foi possivel obter os registros das empresas'					
				};
				console.log("Não foi possivel obter os registros das empresas");
				console.log(erro);
			}
		);

		if ($routeParams.id) {
			Proxy.get({id:$routeParams.id}, 
				function(dado){
					$scope.dado = dado;	
				},
				function(erro){
					$scope.mensagem = {
						texto: 'Não foi possivel chamar o get do dado no servidor'
					};
					console.log(erro);
				}
			);
		}
		else
		{
			$scope.dado =  new Proxy();	
		}



	}

);