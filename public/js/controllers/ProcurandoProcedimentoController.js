angular.module('rio').controller('ProcurandoProcedimentoController', function($scope, ProcurandoProcedimento, 
	$rootScope, FavoritoUsuario, FavoritoPorUsuarioItemTabela, UsuarioTabelaPorUsuario, ProcurandoProcedimentoPorCodigo) {

	var Proxy = ProcurandoProcedimento;

	$scope.filtro = '';
	$scope.mensagem = {texto:''};

	function retornoDoBuscaDados(retorno)
	{
		//console.log(retorno);
		$scope.dados = retorno;
		$scope.mensagem = {};
		angular.forEach($scope.dados, function(value, key){
			pUsario = $rootScope.userId;

			pItemTabela = value._id;

			FavoritoPorUsuarioItemTabela.get(
				{idusuario: pUsario, 
				iditemtabela: pItemTabela}, 
				function(retornoFavorito){
					
					if (retornoFavorito._id)
					{
						value.temFavorito = true;
						value.idFavorito = retornoFavorito._id;
					}	
					else
					{
						value.temFavorito = false;
					}
				},
				function(erro){
					$scope.mensagem = {
						texto: 'Não foi possivel chamar o get do dado no servidor'
					};
					console.log(erro);
				}
			);			
		});
	}

	function buscarDados(){
		//console.log('Dado a ser pesquisado: ' + pNome);
		pTabela = $scope.filtro.tabela;
		pCodigo = $scope.filtro.codigo;
		pNome = $scope.filtro.nome;
		

		if (pTabela ) {

			if (pCodigo && !pNome)
			{
				ProcurandoProcedimentoPorCodigo.query({
						'tabela': pTabela,
						'codigo': pCodigo
					},
					function(retorno)
					{
						retornoDoBuscaDados(retorno)	
					}
					,
					function(erro){
						$scope.mensagem = {
							texto: 'Não foi possivel obter os registros'					
						};
						console.log("Não foi possivel obter os registros");
						console.log(erro);
					}
				);	

			}
			else
			{
				Proxy.query({
						'tabela': pTabela,
						'codigo': pCodigo,
						'nome' : pNome
					},
					function(retorno)
					{
						retornoDoBuscaDados(retorno)	
					}
					,
					function(erro){
						$scope.mensagem = {
							texto: 'Não foi possivel obter os registros'					
						};
						console.log("Não foi possivel obter os registros");
						console.log(erro);
					}
				);	
			}
			
		}// fim do if

	}

	function buscaTabelasDoUsuario(){
		UsuarioTabelaPorUsuario.query(
			{
				'idusuario': $rootScope.userId
			},
			function(dados) {
				$scope.usuarioTabelas = dados;
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
	}
	

	$scope.init = function() {
		buscarDados();
		buscaTabelasDoUsuario();
	};

	$scope.init();

	$scope.procurar = function(){
		buscarDados();
	};

	$scope.favorito = function(pItemTabela){
		novoFavorito = new FavoritoUsuario();
		//console.log($rootScope.usuarioLogado);
		//console.log(pItemTabela);

		novoFavorito.usuario = $rootScope.usuarioLogado;
		novoFavorito.itemTabela = pItemTabela;
		
		novoFavorito.$save()
			.then(function() {
				//$scope.mensagem = {
				//	texto: 'Favorito adicionado com sucesso.'
				//};
				buscarDados();
			})
			.catch(function(erro) {
				$scope.mensagem = {
					texto: 'Não foi possível salvar o registro como favorito.'
				};
				console.log(erro);	
			});
	};

	$scope.remove = function(dado){
		FavoritoUsuario.delete({id: dado.idFavorito},
			buscarDados(),
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