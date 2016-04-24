// public/js/controllers/ContatoController.js

angular.module('rio').controller('ContatoController', 
	function($scope, $routeParams, Contato) {
		console.log('entrou no controlador do contato');
		//var Contato = $resource('/contatos/:id');

		$scope.salva = function(){
			console.log('Salvando o contato...');
			$scope.contato.$save()
				.then(function() {
					$scope.mensagem = {
						texto: 'Contato atualizado com sucesso.'
					};
					$scope.contato = new Contato();
					console.log('chamou a funcao de salvar');
				})
				.catch(function(erro) {
					$scope.mensagem = {
						texto: 'Não foi possível salvar o contato.'
					};
					console.log(erro);	
				});
		};

		if ($routeParams.contatoId) {
			Contato.get({id:$routeParams.contatoId}, 
				function(contato){
					$scope.contato = contato;	
				},
				function(erro){
					$scope.mensagem = {
						texto: 'Não foi possivel chamar o get do contato no servidor'
					};
					console.log(erro);
				}
			);
		}
		else
		{
			$scope.contato =  new Contato();	
		}



	}

);