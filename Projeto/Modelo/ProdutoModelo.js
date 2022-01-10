function ProdutoModelo(produto) {    
    //Armazena os dados do banco de dados recebido na consulta em um objeto.
    let prodModel = {id: produto[0].id, nome: produto[0].nome, imagem: produto[0].imagemSRC, preco: produto[0].preco }
    return prodModel;
}

module.exports = ProdutoModelo;