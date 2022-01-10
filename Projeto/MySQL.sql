CREATE DATABASE lojajogo;

USE lojajogo;

CREATE TABLE produtos(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(50), 
imagemSRC VARCHAR(100), preco DECIMAL(7,2));

INSERT INTO produtos (nome, imagemSRC, preco) VALUES 
    ('PlayStation 4', 'https://i.imgur.com/ogkZ41f.jpg', '1400.00'),
	('Xbox One', 'https://i.imgur.com/CaI1TOx.jpg', '1330.00'),
	('Nintendo Switch', 'https://i.imgur.com/WS16Blq.jpg', '1500.00'),
	('Nintendo 3DS', 'https://i.imgur.com/yjj1Pz3.jpg', '620.00'),
	('Notebook Gamer', 'https://i.imgur.com/64FaA4t.jpg', '4560.00');
