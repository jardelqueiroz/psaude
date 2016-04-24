// public/js/main.js

angular.module('rio',['ngRoute', 'ngResource'])
	.config( function($routeProvider) {
		$routeProvider.when('/contatos', {
			templateUrl: 'partials/contatos.html',
			controller: 'ContatosController'
		});
		$routeProvider.when('/contato/:contatoId', {
			templateUrl: 'partials/contato.html',
			controller: 'ContatoController'
		});
		$routeProvider.when('/contato', {
			templateUrl: 'partials/contato.html',
			controller: 'ContatoController'
		});


		$routeProvider.when('/empresas', {
			templateUrl: 'partials/empresas.html',
			controller: 'EmpresasController'
		});
		$routeProvider.when('/empresa/:id', {
			templateUrl: 'partials/empresa.html',
			controller: 'EmpresaController'
		});
		$routeProvider.when('/empresa', {
			templateUrl: 'partials/empresa.html',
			controller: 'EmpresaController'
		});


		$routeProvider.when('/areas', {
			templateUrl: 'partials/areas.html',
			controller: 'AreasController'
		});
		$routeProvider.when('/area/:id', {
			templateUrl: 'partials/area.html',
			controller: 'AreaController'
		});
		$routeProvider.when('/area', {
			templateUrl: 'partials/area.html',
			controller: 'AreaController'
		});


		$routeProvider.when('/itens', {
			templateUrl: 'partials/itens.html',
			controller: 'ItensController'
		});
		$routeProvider.when('/item/:id', {
			templateUrl: 'partials/item.html',
			controller: 'ItemController'
		});
		$routeProvider.when('/item', {
			templateUrl: 'partials/item.html',
			controller: 'ItemController'
		});

		$routeProvider.when('/tabelas', {
			templateUrl: 'partials/tabelas.html',
			controller: 'TabelasController'
		});
		$routeProvider.when('/tabela/:id', {
			templateUrl: 'partials/tabela.html',
			controller: 'TabelaController'
		});
		$routeProvider.when('/tabela', {
			templateUrl: 'partials/tabela.html',
			controller: 'TabelaController'
		});


		$routeProvider.when('/usuarios', {
			templateUrl: 'partials/usuarios.html',
			controller: 'UsuariosController'
		});
		$routeProvider.when('/usuario/:id', {
			templateUrl: 'partials/usuario.html',
			controller: 'UsuarioController'
		});
		$routeProvider.when('/usuario', {
			templateUrl: 'partials/usuario.html',
			controller: 'UsuarioController'
		});

		$routeProvider.when('/itenstabela', {
			templateUrl: 'partials/itenstabela.html',
			controller: 'ItensTabelaController'
		});
		$routeProvider.when('/itemtabela/:id', {
			templateUrl: 'partials/itemtabela.html',
			controller: 'ItemTabelaController'
		});
		$routeProvider.when('/itemtabela', {
			templateUrl: 'partials/itemtabela.html',
			controller: 'ItemTabelaController'
		});


		$routeProvider.when('/favoritosusuario', {
			templateUrl: 'partials/favoritosusuario.html',
			controller: 'FavoritosUsuarioController'
		});
		$routeProvider.when('/favoritousuario/:id', {
			templateUrl: 'partials/favoritousuario.html',
			controller: 'FavoritoUsuarioController'
		});
		$routeProvider.when('/favoritousuario', {
			templateUrl: 'partials/favoritousuario.html',
			controller: 'FavoritoUsuarioController'
		});


		$routeProvider.when('/usuariostabela', {
			templateUrl: 'partials/usuariostabela.html',
			controller: 'UsuariosTabelaController'
		});
		$routeProvider.when('/usuariotabela/:id', {
			templateUrl: 'partials/usuariotabela.html',
			controller: 'UsuarioTabelaController'
		});
		$routeProvider.when('/usuariotabela', {
			templateUrl: 'partials/usuariotabela.html',
			controller: 'UsuarioTabelaController'
		});


		$routeProvider.when('/', {
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		});

		$routeProvider.when('/procurarprocedimento', {
			templateUrl: 'partials/procurarprocedimento.html',
			controller: 'ProcurandoProcedimentoController'
		});

		$routeProvider.otherwise({
			redirectTo: '/'
		});
	});

/*
	<li><a href="#">Empresa</a></li>
        <li><a href="#">Area</a></li>
        <li><a href="#">Item</a></li>
        <li class="active"><a href="#">Tabela <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Item Tabela</a></li>
        <li><a href="#">Usuário</a></li>
       */