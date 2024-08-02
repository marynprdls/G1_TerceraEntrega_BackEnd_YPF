 CREATE DATABASE  trailerflix
DEFAULT CHARACTER SET utf8mb4;
use trailerflix;

CREATE TABLE categorias(
	categoriaId int PRIMARY KEY AUTO_INCREMENT NOT NULL,
	namecat varchar(50) NOT NULL
);

CREATE TABLE generos(
	generoId int PRIMARY KEY AUTO_INCREMENT NOT NULL,
	namegender varchar(50) NOT NULL
);

CREATE TABLE contenidos(
	id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
	poster varchar(255) NOT NULL,
	titulo varchar(100) NOT NULL,
	categoria int NOT NULL, FOREIGN KEY (categoria) REFERENCES categorias(categoriaId),
	resumen text NOT NULL,
	temporadas int,
	trailer varchar(255) NOT NULL
);

CREATE TABLE actores(
	actorId int PRIMARY KEY AUTO_INCREMENT NOT NULL,
	nameact varchar(100) NOT NULL
);


 