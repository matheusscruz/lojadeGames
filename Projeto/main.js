//PÁGINA DE FUNÇÕES GERAIS
var http = require('http');
var url = require('url');
var obterProduto = require('./DAO/produtoDAO');
var prodModel = require('./Modelo/ProdutoModelo')
var pageGenerator = require('./Interface/pageGenerator');

http.createServer(function (req, res) {
	//Pegar a url para acessar ao banco de dados.
	var dados = url.parse(req.url, true).query;
	id = dados.opcao;
	if (id != undefined) {
		obterProduto(res, id, function (result) {
			pageGenerator(prodModel(result), res);
		});
	}
	else {
		res.write("Erro 404. A página solicitada não existe.");
		res.end();
	}
}).listen(8080);

console.log("Servidor conectado na porta 8080. Pressione Ctrl + C para encerrar a conexão.");