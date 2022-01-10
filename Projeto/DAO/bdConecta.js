//CONEXÃO COM O BANDO DE DADOS
var mysql = require('mysql');

const connection = mysql.createPool({
	connectionLimit: 10,
	host: "localhost",
	user: "root",
	password: "admin",
	database: "lojajogo"
});

var conexao = connection;
console.log("Conexão estabelecida com sucesso!");

module.exports = conexao;