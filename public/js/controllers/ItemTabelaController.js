angular.module('rio').controller('ItemTabelaController', 
	function($scope, $routeParams, ItemTabela, Tabela, Item) {

		var Proxy = ItemTabela;

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

		Tabela.query(
			function(dados) {
				$scope.tabelas = dados;
				$scope.mensagem = {};
			},
			function(erro){

				$scope.mensagem = {
					texto: 'Não foi possivel obter os registros das tabelas'					
				};
				console.log("Não foi possivel obter os registros das tabelas");
				console.log(erro);
			}
		);

		Item.query(
			function(dados) {
				$scope.itens = dados;
				$scope.mensagem = {};
			},
			function(erro){

				$scope.mensagem = {
					texto: 'Não foi possivel obter os registros dos itens'					
				};
				console.log("Não foi possivel obter os registros dos itens");
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