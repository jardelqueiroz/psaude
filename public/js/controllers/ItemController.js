angular.module('rio').controller('ItemController', 
	function($scope, $routeParams, Item, Area) {

		var Proxy = Item;

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

		Area.query(
			function(dados) {
				$scope.areas = dados;
				$scope.mensagem = {};
			},
			function(erro){

				$scope.mensagem = {
					texto: 'Não foi possivel obter os registros das areas'					
				};
				console.log("Não foi possivel obter os registros das areas");
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