angular.module('rio').controller('LoginController', function($scope, $location, $rootScope, Login) {

	$scope.dado = '';
	$scope.mensagem = {texto:''};
	



	$scope.salva = function(){

	 	var pNome = $scope.dado.nome;
        var pSenha = $scope.dado.senha;

    	$rootScope.user = "";
		$rootScope.userId = "";
    	$scope.mensagem = {
			texto: 'Usuário ou senha inválidos'					
		};

        if (pNome) {
			Login.get({nome : pNome}, 
				function(retorno){
					if (retorno && pSenha==1)
					{
						$rootScope.user = retorno.nome;
						$rootScope.userId = retorno._id;
						$rootScope.usuarioLogado = retorno; 
						$location.path( "/procurarprocedimento" );
					}

				},
				function(erro){
					console.log('erro ao buscar');
					$scope.mensagem = {
						texto: 'Usuário inválido.'
					};
					return;
				}
			);
		}// fim do if
    
	}; // fim do salva
	

});