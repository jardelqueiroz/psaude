
module.exports = function (app) {
	var controller = {};
	var Proxy = app.models.usuario;
	
	controller.listar = function(req, res) {
		Proxy.find().sort('nome').exec()
			.then(function(dados) {
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

	controller.obterPeloNome = function(req, res) {
		var pNome = req.params.nome;

		Proxy.findOne({'nome': pNome}).exec()
			.then(
				function(dado){
					if (!dado){
						//console.log('erro ao buscar o dado');
						throw new Error("Dado não encontrado");
					}
						
					//console.log(dado.nome);
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