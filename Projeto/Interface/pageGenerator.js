function ChainOfResponsability(produto, res) {
    switch(produto.id) {
        case 1: Ps4Page(produto, res); break;
        case 2: XboxPage(produto, res); break;
        case 3: NinSw(produto, res); break;
        case 4: Nin3DS(produto, res); break;
        case 5: Notebooks(produto, res); break;
    }
}

function Estilos(res) {
	res.write(`<style>`);
	res.write(`
	body {
		background-image: url(https://i.imgur.com/F72XonS.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
	}
	
	header {
		border-bottom: 3px ridge #FFF; 
		margin-bottom: 15px;
	}
	
	div#container {
		width: 100%;
		height: 100%;
		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	
	}
	
	div#wrapper {
		border: 5px ridge #B5101A;
		padding: 5px;
		text-align: center;
		background-color: goldenrod;
	}
	
	img {
		max-width: 40%;
		margin-left: 10px;
		margin-right: auto;
		border: 4px solid #B5101A;
		border-radius: 10px;
	}
	
	fieldset {
		font-size: 12pt;
		text-align: left;
		border: 3px ridge #FFF;
		border-radius: 10px;
		margin: 10px;
	}
	
	legend.CampoTitu {
		font-weight: bold;
	}
	
	h1.Titulo {
		font-family: serif;
		font-size: 40pt;
		font-style: italic;
		color: white;
		text-shadow: 2px 2px #000;
	} 
	
	h2 {
		color: white;
		font-size: 30pt;
		text-shadow: 2px 2px #000;
	}

	h3.Titulo {
		font-family: Lucida Grande;
		font-size: 20pt;
		color: white;
		text-shadow: 2px 2px #000;
	}
	
	span.TituloSpan {
		color: #FFF;
		font-size: 15pt;
		margin-right: 5px;
	}
	
	input#Total {
		width: 80px;
	}

	p.paragrafo {
		color: white;
		font-size: 12pt;
	}
	
	p.Rodape {
		text-align: center;
		font-weight: bold;
		font-size: 10pt;
		padding: 5px;
		margin: 10px;	
	}
	
	footer {
		border-top: 3px ridge #FFF;
	}
	`);
	res.write(`</style>`);
}

function Funcoes(res, produto) {
	res.write(`<script>`);
	res.write(`
		let c = new Array(0, 0, 0, 0, 0);
		const Total = document.getElementById('Total');

		function novoValor(carac, valor){
    		c[carac] = valor; 
    		let resultado = ${produto.preco} + c[0] + c[1] + c[2] + c[3] + c[4]
			resultado = parseFloat(resultado.toFixed(2));
    		Total.value = resultado;
		}
	`);
	res.write(`</script>`);
}

function Ps4Page(produto, res) {
	console.log("Página enviada com sucesso!");
	res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
	res.write(`<!DOCTYPE html>
	<html lang="pt-br">`);
    res.write(`
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Game Stores</title>`);
	//Chama a função para formatação do css
	Estilos(res);
    res.write(`</head>`);
    
    res.write(`
    <body>
    <div id="container">
		<div id="wrapper">
			<header>
				<h1 class="Titulo">Game Stores</h1>
			</header>

			<section>
				<img src="${produto.imagem}" alt="${produto.nome}"/>
				
				<h2> ${produto.nome} </h2>
				
				<p class="paragrafo"><span class="TituloSpan">Valor: R$ ${produto.preco}</span></p>
				
				<h3 class="Titulo">Adicionais</h3>

				<form id="caracteristicas" method="post" action="">

					<fieldset id="Jogos">
						
						<legend class="CampoTitu">Escolha um jogo exclusivo</legend>

						<input type="radio" id="jogo1" name="jogos" value="0" onclick="novoValor(0, 259.90);" />
						<label for="jogo1">Days Gone (R$ +259,90)</label><br/>

						<input type="radio" id="jogo2" name="jogos" value="1" onclick="novoValor(0, 64.99);"/>
						<label for="jogo2">Horizon Zero Dawn (R$ +64,99)</label><br/>
						
						<input type="radio" id="jogo3" name="jogos" value="2" onclick="novoValor(0, 119.90);"/>
						<label for="jogo3">God of War (R$ +119,90)</label><br/>

						<input type="radio" id="Model4" name="jogos" value="3" onclick="novoValor(0, 0);"/>
						<label for="Model4">Nenhum (R$ +0,00)</label>

					</fieldset>

					<fieldset id="Tema">
						<legend class="CampoTitu">Edições Especiais</legend>

						<input type="radio" id="Tema0" name="Tema" value="0" onclick="novoValor(1, 659.90);"/>
						<label for="Tema0">Black Especial - Monster Hunter (R$ +649,90)</label><br/>

						<input type="radio" id="Tema1" name="Tema" value="1" onclick="novoValor(1, 689.90);"/>
						<label for="Tema1">White Especial - Destiny (R$ +689,90)</label><br/>

						<input type="radio" id="Tema2" name="Tema" value="2" onclick="novoValor(1, 349.90);"/>
						<label for="Tema2">Especial - God Of War (R$ +349,90)</label><br/>

						<input type="radio" id="Tema3" name="Tema" value="3" onclick="novoValor(1, 0);"/>
						<label for="Tema3">Nenhum (R$ +0,00)</label><br/>
					</fieldset>

					<fieldset id="Model">
						<legend class="CampoTitu">Modelo</legend>

						<input type="radio" id="Model0" name="Model" value="0" onclick="novoValor(2, 0);"/>
						<label for="Model0">Clássico (R$ +0,00)</label><br/>

						<input type="radio" id="Model1" name="Model" value="1" onclick="novoValor(2, 449.90);"/>
						<label for="Model1">Slim (R$ +449,90)</label><br/>

						<input type="radio" id="Model2" name="Model" value="2" onclick="novoValor(2, 799.90);"/>
						<label for="Model2">Pro (R$ +799,90)</label>
					</fieldset>

					<fieldset id="qtd">
						<legend class="CampoTitu">Controles Extra</legend>

						<input type="radio" id="qtd1" name="qtd" value="0" onclick="novoValor(3, 229.99);"/>
						<label for="qtd1">+1 (R$ +229,99)</label><br/>

						<input type="radio" id="qtd2" name="qtd" value="1" onclick="novoValor(3, 459.99);"/>
						<label for="qtd2">+2 (R$ +459,99)</label><br/>

						<input type="radio" id="qtd3" name="qtd" value="2" onclick="novoValor(3, 689.99);"/>
						<label for="qtd3">+3 (R$ +689,99)</label><br/>

						<input type="radio" id="qtd4" name="qtd" value="3" onclick="novoValor(3, 0);"/>
						<label for="qtd4">Nenhum (R$ +0,00)</label>
					</fieldset>

					<fieldset id="kit">
						<legend class="CampoTitu">Kits de acessório</legend>

						<input type="radio" id="kit0" name="kit" value="0" onclick="novoValor(4, 629.90);"/>
						<label for="kit0">Headset Platinum (R$ +629,90)</label><br/>

						<input type="radio" id="kit1" name="kit" value="1" onclick="novoValor(4, 309.90);"/>
						<label for="kit1">Camera (R$ +309,90)</label><br/>

						<input type="radio" id="kit2" name="kit" value="2" onclick="novoValor(4, 1390.99);"/>
						<label for="kit2">Oculos VR (R$ +1390,99)</label><br/>

						<input type="radio" id="kit3" name="jogos" value="3" onclick="novoValor(4, 0);"/>
						<label for="kit3">Nenhum (R$ +0,00)</label>
					</fieldset>

					<br /><p><span class="TituloSpan">Preço Final: R$</span><input id="Total" type="text" value="${produto.preco}" readonly></p>
				</form>

			<footer>
				<p class="Rodape">&copy; Todos os direitos reservados para Matheus Henrique, Leonardo Boa Morte, Daniella Eiriz</p>
			</footer>
			</section>
		</div>
    </div>`);
	//Chamar a FUNÇÃO de FUNÇÕES JavaScript
	Funcoes(res, produto);
	res.write(`</body>`);
	res.write(`</html>`);
    res.end();
}

function XboxPage(produto, res) {
	console.log("Página enviada com sucesso!");
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
	res.write(`<!DOCTYPE html>
	<html lang="pt-br">`);
	res.write(`
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Game Stores</title>`);
	//Chamar a função para formatação do css
	Estilos(res);
    res.write(`</head>`);
    
    res.write(`
    <body>
    <div id="container">
		<div id="wrapper">
			<header>
				<h1 class="Titulo">Game Stores</h1>
			</header>

			<section>
				<img src="${produto.imagem}" alt="${produto.nome}"/>
				
				<h2> ${produto.nome} </h2>
				
                <p class="paragrafo"><span class="TituloSpan">Valor: R$ ${produto.preco}</span></p>
				
				<h3 class="Titulo">Adicionais</h3>

				<form id="caracteristicas" method="post" action="">

					<fieldset id="Jogos">
						
						<legend class="CampoTitu">Escolha um jogo exclusivo</legend>

						<input type="radio" id="jogo1" name="jogos" value="0" onclick="novoValor(0, 46.99);" />
						<label for="jogo1">Halo: Master Chief Collection (R$ +46,99)</label><br/>

						<input type="radio" id="jogo2" name="jogos" value="1" onclick="novoValor(0, 69.90);"/>
						<label for="jogo2">Gears of War (R$ +69,90)</label><br/>
						
						<input type="radio" id="jogo3" name="jogos" value="2" onclick="novoValor(0, 115.90);"/>
						<label for="jogo3">Forza Horizon (R$ +115,90)</label><br/>

						<input type="radio" id="jogo4" name="jogos" value="3" onclick="novoValor(0, 0);"/>
						<label for="jogo4">Nenhum (R$ +0,00)</label>
					</fieldset>

					<fieldset id="Eds">
						<legend class="CampoTitu">Edições Especiais</legend>

						<input type="radio" id="Ed0" name="Eds" value="0" onclick="novoValor(1, 769.99);"/>
						<label for="Ed0">Crimson Especial - Gears of War 4 (R$ +769,99)</label><br/>

						<input type="radio" id="Ed1" name="Eds" value="1" onclick="novoValor(1, 769.99);"/>
						<label for="Ed1">Blue Special - Forza Motorsport 6 (R$ +769,99)</label><br/>

						<input type="radio" id="Ed2" name="Eds" value="2" onclick="novoValor(1, 1089.99);"/>
						<label for="Ed2">Dourado (R$ +1089,99)</label><br/>

						<input type="radio" id="Ed3" name="Eds" value="3" onclick="novoValor(1, 0);"/>
						<label for="Ed3">Nenhum (R$ +0,00)</label><br/>
					</fieldset>

					<fieldset id="Modelos">
						<legend class="CampoTitu">Modelos</legend>

						<input type="radio" id="Model0" name="Modelos" value="0" onclick="novoValor(2, 0);"/>
						<label for="Model0">Tradicional (R$ +0,00)</label><br/>

						<input type="radio" id="Model1" name="Modelos" value="1" onclick="novoValor(2, 139.90);"/>
						<label for="Model1">S - 1TB 4K (R$ +139,90)</label><br/>

						<input type="radio" id="Model2" name="Modelos" value="2" onclick="novoValor(2, 19.90);"/>
						<label for="Model2">500Gb (R$ +19,90)</label>
					</fieldset>

					<fieldset id="qtd">
						<legend class="CampoTitu">Controles Extra</legend>

						<input type="radio" id="qtd0" name="qtd" value="0" onclick="novoValor(3, 259.99);"/>
						<label for="qtd0">+1 (R$ +259,99)</label><br/>

						<input type="radio" id="qtd1" name="qtd" value="1" onclick="novoValor(3, 518.90);"/>
						<label for="qtd1">+2 (R$ +518,90)</label><br/>

						<input type="radio" id="qtd2" name="qtd" value="2" onclick="novoValor(3, 776.90);"/>
						<label for="qtd2">+3 (R$ +776,90)</label><br/>

						<input type="radio" id="qtd3" name="qtd" value="3" onclick="novoValor(3, 0);"/>
						<label for="qtd3">Nenhum (R$ +0,00)</label>
					</fieldset>

					<fieldset id="Aces">
						<legend class="CampoTitu">Acessório</legend>

						<input type="radio" id="Aces0" name="Aces" value="0" onclick="novoValor(4, 369.99);"/>
						<label for="Aces0">Headset (R$ +369,99)</label><br/>

						<input type="radio" id="Aces1" name="Aces" value="1" onclick="novoValor(4, 469.99);"/>
						<label for="Aces1">Kinect (R$ +469,99)</label><br/>

						<input type="radio" id="Aces2" name="Aces" value="2" onclick="novoValor(4, 1799.90);"/>
						<label for="Aces2">Oculos VR (R$ +1799,90)</label><br/>

						<input type="radio" id="Aces3" name="Aces" value="3" onclick="novoValor(4, 0);"/>
						<label for="Aces3">Nenhum (R$ +0,00)</label>
					</fieldset>

					<br /><p><span class="TituloSpan">Preço Final: R$</span><input id="Total" type="text" value="${produto.preco}" readonly></p>
				</form>

			<footer>
				<p class="rodape">&copy; Todos os direitos reservados para Matheus Henrique, Leonardo Boa Morte, Daniella Eiriz</p>
			</footer>
			</section>
		</div>
	</div>`);
	//Chamar a FUNÇÃO de FUNÇÕES JavaScript
	Funcoes(res, produto);
	res.write(`</body>`);
	res.write(`</html>`);
    res.end();
}

function NinSw(produto, res) {
	console.log("Página enviada com sucesso!");
	res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
	res.write(`<!DOCTYPE html>
	<html lang="pt-br">`);
    res.write(`
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Game Stores</title>`);
	//Chama a função para formatação do css
	Estilos(res);
    res.write(`</head>`);
    
    res.write(`
    <body>
    <div id="container">
		<div id="wrapper">
			<header>
				<h1 class="Titulo">Game Stores</h1>
			</header>

			<section>
				<img src="${produto.imagem}" alt="${produto.nome}"/>
				
				<h2> ${produto.nome} </h2>
				
                <p class="paragrafo"><span class="TituloSpan">Valor: R$ ${produto.preco}</span></p>
				
				<h3 class="Titulo">Características Adicionais</h3>

				<form id="caracteristicas" method="post" action="">

					<fieldset id="Jogos">
						
						<legend class="CampoTitu">Escolha um jogo exclusivo</legend>

						<input type="radio" id="jogo1" name="jogos" value="0" onclick="novoValor(0, 269.99);" />
						<label for="jogo1">Super Mario Odyssey (R$ +269,99)</label><br/>

						<input type="radio" id="jogo2" name="jogos" value="1" onclick="novoValor(0, 279.99);"/>
						<label for="jogo2">MarioKart 8 Deluxe(R$ +279,99)</label><br/>
						
						<input type="radio" id="jogo3" name="jogos" value="2" onclick="novoValor(0, 269.99);"/>
						<label for="jogo3">The Legend of Zelda: Breath Of The Wild(R$ +269,99)</label><br/>

						<input type="radio" id="jogo4" name="jogos" value="3" onclick="novoValor(0, 0);"/>
						<label for="jogo4">Nenhum (R$ +0,00)</label>
					</fieldset>

					<fieldset id="Temas">
						<legend class="CampoTitu">Temas</legend>

						<input type="radio" id="Tema0" name="Temas" value="0" onclick="novoValor(1, 0);"/>
						<label for="Tema0">Original Black (R$ +0,00)</label><br/>

						<input type="radio" id="Tema1" name="Temas" value="1" onclick="novoValor(1, 111.9);"/>
						<label for="Tema1">Neon (R$ +111,90)</label><br/>

						<input type="radio" id="Tema2" name="Temas" value="2" onclick="novoValor(1, 699.9);"/>
						<label for="Tema2">Especial Super Smash Bros (R$ +699,90)</label><br/>
					</fieldset>

					<fieldset id="Tipo">
						<legend class="CampoTitu">Tipo de Controles</legend>

						<input type="radio" id="Tipo0" name="Tipo" value="0" onclick="novoValor(2, 0);"/>
						<label for="Tipo0">Joy-Con (R$ +0,00)</label><br/>

						<input type="radio" id="Tipo1" name="Tipo" value="1" onclick="novoValor(2, 186.9);"/>
						<label for="Tipo1">Pro Controller com fio (R$ +186,90)</label><br/>

						<input type="radio" id="Tipo2" name="Tipo" value="2" onclick="novoValor(2, 259.99);"/>
						<label for="Tipo2">Pro Controller sem fio (R$ +259,99)</label>						
					</fieldset>

					<fieldset id="qtd">
						<legend class="CampoTitu">Quantidade de Joy-Con</legend>

						<input type="radio" id="qtd0" name="qtd" value="0" onclick="novoValor(3, 149.99);"/>
						<label for="qtd0">+1 (R$ +149,99)</label><br/>

						<input type="radio" id="qtd1" name="qtd" value="1" onclick="novoValor(3, 299.99);"/>
						<label for="qtd1">+2 (R$ +299,99)</label><br/>

						<input type="radio" id="qtd2" name="qtd" value="2" onclick="novoValor(3, 449.99);"/>
						<label for="qtd2">+3 (R$ +449,99)</label><br/>

						<input type="radio" id="qtd3" name="qtd" value="3" onclick="novoValor(3, 0);"/>
						<label for="qtd3">Nenhum (R$ +0,00)</label>
					</fieldset>

					<fieldset id="kit">
						<legend class="CampoTitu">Kits de acessório</legend>

						<input type="radio" id="kit0" name="kit" value="0" onclick="novoValor(4, 179.99);"/>
						<label for="kit0">Headset Hori (R$ +179,99)</label><br/>

						<input type="radio" id="kit1" name="kit" value="1" onclick="novoValor(4, 179.99);"/>
						<label for="kit1">1 - Bolsa Impermeável (R$ +179,99)</label><br/>

						<input type="radio" id="kit2" name="kit" value="2" onclick="novoValor(4, 351.99);"/>
						<label for="kit2">Bolsa + Headset Hori (R$ +351,99)</label><br/>

						<input type="radio" id="kit3" name="kit" value="3" onclick="novoValor(4, 0);"/>
						<label for="kit3">Nenhum (R$ +0,00)</label>
					</fieldset>

					<br /><p><span class="TituloSpan">Preço Final: R$</span><input id="Total" type="text" value="${produto.preco}" readonly></p>
				</form>

			<footer>
				<p class="rodape">&copy; Todos os direitos reservados para Matheus Henrique, Leonardo Boa Morte, Daniella Eiriz</p>
			</footer>
			</section>
		</div>
	</div>`);
	//Chama a FUNÇÃO de FUNÇÕES JavaScript
	Funcoes(res, produto);
	res.write(`</body>`);
	res.write(`</html>`);
    res.end();
}

function Nin3DS(produto, res) {
	console.log("Página enviada com sucesso!");
	res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
	res.write(`<!DOCTYPE html>
	<html lang="pt-br">`);
    res.write(`
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Game Stores</title>`);
	//Chama a função para formatação do css
	Estilos(res);
    res.write(`</head>`);
    
    res.write(`
    <body>
    <div id="container">
		<div id="wrapper">
			<header>
				<h1 class="Titulo">Game Stores</h1>
			</header>

			<section>
				<img src="${produto.imagem}" alt="${produto.nome}"/>

				<h2> ${produto.nome} </h2>
				
				<p class="paragrafo"><span class="TituloSpan">Valor: R$ ${produto.preco}</span></p>
				
				<h3 class="Titulo">Adicionais</h3>

				<form id="caracteristicas" method="post" action="">

					<fieldset id="Jogos">
						
						<legend class="CampoTitu">Escolha um jogo exclusivo</legend>

						<input type="radio" id="jogo1" name="jogos" value="0" onclick="novoValor(0, 134.99);" />
						<label for="jogo1">New Super Mario Bros. 2 (R$ +134,99)</label><br/>

						<input type="radio" id="jogo2" name="jogos" value="1" onclick="novoValor(0, 94.99);"/>
						<label for="jogo2">Monster Hunter 4 Ultimate (R$ +94,99)</label><br/>
						
						<input type="radio" id="jogo3" name="jogos" value="2" onclick="novoValor(0, 134.99);"/>
						<label for="jogo3">Bravely Second (R$ +134,99)</label><br/>

						<input type="radio" id="jogo4" name="jogos" value="3" onclick="novoValor(0, 0);"/>
						<label for="jogo4">Nenhum (R$ +0,00)</label>
					</fieldset>

					<fieldset id="Tema">
						<legend class="CampoTitu">Temas</legend>

						<input type="radio" id="Tema0" name="Tema" value="0" onclick="novoValor(1, 349.99);"/>
						<label for="Tema0">New Galaxy Edition (R$ +349,99)</label><br/>

						<input type="radio" id="Tema1" name="Tema" value="1" onclick="novoValor(1, 209.99);"/>
						<label for="Tema1">Pikachu Edition (R$ +209,99)</label><br/>

						<input type="radio" id="Tema2" name="Tema" value="2" onclick="novoValor(1, 319.99);"/>
						<label for="Tema2">Super Nintendo Entreteniment System Edition (R$ +319,99)</label><br/>

						<input type="radio" id="Tema3" name="Tema" value="3" onclick="novoValor(1, 0);"/>
						<label for="Tema3">Nenhum (R$ +0,00)</label><br/>
					</fieldset>

					<fieldset id="Model">
						<legend class="CampoTitu">Modelo</legend>

						<input type="radio" id="Model0" name="Model" value="0" onclick="novoValor(2, 0);"/>
						<label for="Model0">Comum (R$ +0,00)</label><br/>

						<input type="radio" id="Model1" name="Model" value="1" onclick="novoValor(2, 179.99);"/>
						<label for="Model1">XL (R$ +179,99)</label><br/>

						<input type="radio" id="Model2" name="Model" value="2" onclick="novoValor(2, 209.99);"/>
						<label for="Model2">New 3DS Xl (R$ +209,99)</label>
					</fieldset>

					<fieldset id="qtd">
						<legend class="CampoTitu">Cores</legend>

						<input type="radio" id="qtd1" name="qtd" value="0" onclick="novoValor(3, 29.99);"/>
						<label for="qtd1">Branco Pérola (R$ +29,99)</label><br/>

						<input type="radio" id="qtd2" name="qtd" value="1" onclick="novoValor(3, 49.99);"/>
						<label for="qtd2">Preto + Laranja (R$ +49,99)</label><br/>

						<input type="radio" id="qtd3" name="qtd" value="2" onclick="novoValor(3, 34.99);"/>
						<label for="qtd3">Branco + Rosa (R$ +34,99)</label><br/>

						<input type="radio" id="qtd4" name="qtd" value="3" onclick="novoValor(3, 0);"/>
						<label for="qtd4">Nenhum (R$ +0,00)</label>
					</fieldset>

					<fieldset id="kit">
						<legend class="CampoTitu">Kits de acessório</legend>

						<input type="radio" id="kit0" name="kit" value="0" onclick="novoValor(4, 55.99);"/>
						<label for="kit0">Zelda Pouch Kit (R$ +55,99)</label><br/>

						<input type="radio" id="kit1" name="kit" value="1" onclick="novoValor(4, 120.32);"/>
						<label for="kit1">Charging Cradle (R$ +120,32)</label><br/>

						<input type="radio" id="kit2" name="kit" value="2" onclick="novoValor(4, 96.30);"/>
						<label for="kit2">Controller Grip (R$ +96,30)</label><br/>

						<input type="radio" id="kit3" name="kit" value="3" onclick="novoValor(4, 0);"/>
						<label for="kit3">Nenhum (R$ +0,00)</label>
					</fieldset>

					<br /><p><span class="TituloSpan">Preço Final: R$</span><input id="Total" type="text" value="${produto.preco}" readonly></p>
				</form>

			<footer>
				<p class="rodape">&copy; Todos os direitos reservados para Matheus Henrique, Leonardo Boa Morte, Daniella Eiriz</p>
			</footer>
			</section>
		</div>
    </div>`);
	//Chama a FUNÇÃO de FUNÇÕES JavaScript
	Funcoes(res, produto);
	res.write(`</body>`);
	res.write(`</html>`);
    res.end();
}

function Notebooks(produto, res){
	console.log("Página enviada com sucesso!");
	res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
	res.write(`<!DOCTYPE html>
	<html lang="pt-br">`);
    res.write(`
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Game Stores</title>`);
	//Chama a função para formatação do css
	Estilos(res);
    res.write(`</head>`);
    
    res.write(`
    <body>
    <div id="container">
		<div id="wrapper">
			<header>
				<h1 class="Titulo">Game Stores</h1>
			</header>

			<section>
				<img src="${produto.imagem}" alt="${produto.nome}"/>

				<h2> ${produto.nome} </h2>
				
				<p class="paragrafo"><span class="TituloSpan">Valor: R$ ${produto.preco}</span></p>
				
				<h3 class="Titulo">Adicionais</h3>

				<form id="caracteristicas" method="post" action="">

					<fieldset id="Jogos">
						
						<legend class="CampoTitu">Escolha um jogo</legend>

						<input type="radio" id="jogo1" name="jogos" value="0" onclick="novoValor(0, 199.99);" />
						<label for="jogo1">Sekiro Shadow die Twice (R$ +199,99)</label><br/>

						<input type="radio" id="jogo2" name="jogos" value="1" onclick="novoValor(0, 99.99);"/>
						<label for="jogo2">Monster Hunter World(R$ +99,99)</label><br/>
						
						<input type="radio" id="jogo3" name="jogos" value="2" onclick="novoValor(0, 129.99);"/>
						<label for="jogo3">The Division 2 (R$ +129,99)</label><br/>

						<input type="radio" id="jogo4" name="jogos" value="3" onclick="novoValor(0, 0);"/>
						<label for="jogo4">Nenhum (R$ +0,00)</label>
					</fieldset>

					<fieldset id="Ram">
						<legend class="CampoTitu">Memoria Ram Extra</legend>

						<input type="radio" id="Ram0" name="Ram" value="0" onclick="novoValor(1, 179.99);"/>
						<label for="Ram0">+4Gb (R$ +179,99)</label><br/>

						<input type="radio" id="Ram1" name="Ram" value="1" onclick="novoValor(1, 429.99);"/>
						<label for="Ram1">+8GB (R$ +429,99)</label><br/>

						<input type="radio" id="Ram2" name="Ram" value="2" onclick="novoValor(1, 889.99);"/>
						<label for="Ram2">+16GB (R$ +889,99)</label><br/>

						<input type="radio" id="Ram3" name="Ram" value="3" onclick="novoValor(1, 0);"/>
						<label for="Ram3">Padrão (R$ +0,00)</label><br/>
					</fieldset>

					<fieldset id="Hd">
						<legend class="CampoTitu">Espaço Extra na Memoria</legend>

						<input type="radio" id="Hd0" name="Hd" value="0" onclick="novoValor(2, 229.99);"/>
						<label for="Hd0">+250GB (R$ +229,99)</label><br/>

						<input type="radio" id="Hd1" name="Hd" value="1" onclick="novoValor(2, 519.99);"/>
						<label for="Hd1">+500GB (R$ +519,99)</label><br/>

						<input type="radio" id="Hd2" name="Hd" value="2" onclick="novoValor(2, 949.99);"/>
						<label for="Hd2">+1TB (R$ +949,99)</label><br/>

						<input type="radio" id="Hd3" name="Hd" value="3" onclick="novoValor(2, 0);"/>
						<label for="Hd3">Padrão (R$ +0,00)</label>
					</fieldset>

					<fieldset id="ssd">
						<legend class="CampoTitu">Mais memoria no SSD</legend>

						<input type="radio" id="ssd0" name="ssd" value="0" onclick="novoValor(3, 209.99);"/>
						<label for="ssd0">+250GB (R$ +209,99)</label><br/>

						<input type="radio" id="ssd1" name="ssd" value="1" onclick="novoValor(3, 469.99);"/>
						<label for="ssd1">+500GB (R$ +469,99)</label><br/>

						<input type="radio" id="ssd2" name="ssd" value="2" onclick="novoValor(3, 894.99);"/>
						<label for="ssd2">+1TB (R$ +894,99)</label><br/>

						<input type="radio" id="ssd3" name="ssd" value="3" onclick="novoValor(3, 0);"/>
						<label for="ssd3">Padrão (R$ +0,00)</label>
					</fieldset>

					<fieldset id="kit">
						<legend class="CampoTitu">Acessório</legend>

						<input type="radio" id="kit0" name="kit" value="0" onclick="novoValor(4, 333.99);"/>
						<label for="kit0">Headset Hyper X (R$ +333,99)</label><br/>

						<input type="radio" id="kit1" name="kit" value="1" onclick="novoValor(4, 329.99);"/>
						<label for="kit1">Mouse Gamer (R$ +329,99)</label><br/>

						<input type="radio" id="kit2" name="kit" value="2" onclick="novoValor(4, 129.99);"/>
						<label for="kit2">Mochila para Notebook (R$ +129,99)</label><br/>

						<input type="radio" id="kit3" name="kit" value="3" onclick="novoValor(4, 0);"/>
						<label for="kit3">Nenhum (R$ +0,00)</label>
					</fieldset>

					<br /><p><span class="TituloSpan">Preço Final: R$</span><input id="Total" type="text" value="${produto.preco}" readonly></p>
				</form>

			<footer>
				<p class="rodape">&copy; Todos os direitos reservados para Matheus Henrique, Leonardo Boa Morte, Daniella Eiriz</p>
			</footer>
			</section>
		</div>
	</div>`);
	//Chama a FUNÇÃO de FUNÇÕES JavaScript
	Funcoes(res, produto);
	res.write(`</body>`);
	res.write(`</html>`);
    res.end();
}

module.exports = ChainOfResponsability;