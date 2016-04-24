
module.exports = function (app) {
	var controller = {};
	var Proxy = app.models.itemTabela;

	controller.listar = function(req, res) {
		Proxy.find().populate('tabela').deepPopulate('tabela.empresa').populate('item').sort('codigo').exec()
			.then(function(dados) {
				res.json(dados);
			},
			function (erro) {
				console.log(erro);
				res.status(500).json(erro);
			}
		);
	};

	controller.listarPorTabelaNomeCodigo = function(req, res) {
		pTabela = req.params.tabela;
		if (req.params.codigo)
		{
			pCodigoLike = new RegExp(req.params.codigo, 'i');		
		}
		else
		{
			pCodigoLike = new RegExp('', 'i');
		}

		if (req.params.nome)
		{
			pNomelike = new RegExp(req.params.nome, 'i'); 	
		}
		else
		{
			pNomelike = new RegExp('', 'i'); 
		}

		
		
		
		//console.log(pTabela);
		//console.log(pCodigoLike);
		//console.log(pNomelike);

		Proxy.find({
				'tabela':pTabela,
				'codigo': pCodigoLike,
				'nome': pNomelike
			}).populate('tabela').deepPopulate('tabela.empresa').populate('item').sort('codigo').exec()
			.then(function(dados) {
				//console.log(dados);
				res.json(dados);
			},
			function (erro) {
				console.log(erro);
				res.status(500).json(erro);
			}
		);
	};	
	

	controller.obter = function(req, res) {
		var _id = req.params.id;

		Proxy.findById(_id).exec()
			.then(
				function(dado){
					if (!dado)
						throw new Error("Dado não encontrado");
					res.json(dado);
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);		
				}
		);
	};

	controller.remover = function(req, res){
		var id = req.params.id;
		Proxy.remove({"_id": id}).exec()
			.then(
				function() {
					res.status(204).end();			
				},
				function(erro){
					console.log(erro);
				}			
		);		
	};

	controller.salvar = function(req, res){
		var _id = req.body._id;

		if(_id) {
			Proxy.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(dado) {
						res.json(dado);
					},
					function (erro){
						console.log(erro);
						res.status(500).json(erro);		
					}

			);
		}
		else
		{
			Proxy.create(req.body)
				.then(
					function(dado) {
						res.status(201).json(dado);		
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);		
					}
			);
		}

	};	

	return controller;

};