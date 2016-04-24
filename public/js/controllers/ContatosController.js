angular.module('rio').controller('ContatosController', function($scope, Contato) {
	$scope.total = 0;
	$scope.filtro = '';
	$scope.mensagem = {texto:''};

	$scope.incrementa = function() {
		$scope.total++;
	};

	var contatos = [
		{
			"_id": 1,
			"nome": "João",
			"email": "joao.deus@teste.com"
		},
		{
			"_id": 2,
			"nome": "José",
			"email": "jose@teste.com"
		},
		{
			"_id": 3,
			"nome": "Joaquim",
			"email": "joaquim@teste.com"
		}
	];

	//$scope.contatos = contatos;

	//$http.get('/classes')
	//	.success(function(data) {
	//		$scope.contatos = data;
	//		console.log(data);
	//	})
	//	.error(function(statusText){
	//		console.log("Não foi possivel conectar com o servidor.");
	//		console.log(statusText);
	//	});

	//var Contato = $resource('/contatos/:id');

	function buscaContatos(){
		Contato.query(
			function(contatos) {
				$scope.contatos = contatos;
				$scope.mensagem = {};
				console.log('chamou o buscaContatos');
			},
			function(erro){

				$scope.mensagem = {
					texto: 'Não foi possivel obter os dados dos contatos'					
				};
				console.log("Não foi possivel obter os dados dos contatos");
				console.log(erro);
			}
		);
	}
	

	$scope.init = function() {
		buscaContatos();
		console.log("chamou o init");

	};

	$scope.init();

	$scope.remove = function(contato){
		Contato.delete({id: contato._id},
			buscaContatos,
			function(erro){
				$scope.mensagem = {
					texto: 'Erro ao chamar o metodo delete de contatos'					
				};
				console.log('Erro ao chamar o metodo delete de contatos');
				console.log(erro);
			}
		);
	};


});