//Acessa o banco de dados para consulta.
var conexao = require("./bdConecta");

function obterProduto(res, idProd, callback) {
	let comando = "SELECT * FROM produtos WHERE id = ?";

	conexao.getConnection(function (err, connection) {
			if (err) throw err;
			conexao.query(comando, idProd, function (err2, result) {
				callback(result);
				console.log("Dados recuperados com sucesso.");
				connection.release();
				if (err2) throw err2;
			});
		});
}

module.exports = obterProduto;