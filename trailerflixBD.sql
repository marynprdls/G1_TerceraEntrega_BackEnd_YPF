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

CREATE TABLE contenido_generos(
	content_id int NOT NULL, FOREIGN KEY (content_id) REFERENCES contenidos(id),
	gender_id int NOT NULL, FOREIGN KEY (gender_id) REFERENCES generos(generoId)
);

CREATE TABLE contenido_actores(
	content_id int NOT NULL, FOREIGN KEY (content_id) REFERENCES contenidos(id),
	actor_id int NOT NULL, FOREIGN KEY (actor_id) REFERENCES actores(actorId),
    PRIMARY KEY (content_id, actor_id)
);
 
CREATE TABLE categoria_generos (
	cat_id int NOT NULL, FOREIGN KEY (cat_id) REFERENCES categorias(categoriaId),
	gender_id int NOT NULL, FOREIGN KEY (gender_id) REFERENCES generos(generoId),
    PRIMARY KEY (cat_id, gender_id)
);

-- Inserción para Categorias
 INSERT INTO categorias(categoriaId, namecat)
 VALUES (1,'Serie'), (2,'Pelicula');
 
-- Inserción para Contenidos
INSERT INTO contenidos (id, poster, titulo, categoria, resumen, temporadas, trailer)
VALUES (3, './posters/3.jpg', 'The Mandalorian', 1, 'Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la Serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.', 2, 'https://www.youtube.com/embed/aOC8E8z_ifw'),
(4, './posters/4.jpg', 'The Umbrella Academy', 1, 'La muerte de su padre reúne a unos hermanos distanciados y con extraordinarios poderes que descubren impactantes secretos y una amenaza que se cierne sobre la humanidad.', 1, 'https://www.youtube.com/embed/KHucKOK-Vik'),
(5, './posters/5.jpg', 'Gambito de Dama', 1, 'En los cincuenta, una joven de un orfanato descubre que tiene un increíble don para el ajedrez y recorre el arduo camino a la fama mientras lucha contra las adicciones.', 1, 'https://www.youtube.com/embed/lbleRbyGKL4'),
(2, './posters/2.jpg', 'Riverdale', 1, 'El paso a la edad adulta incluye sexo, romance, escuela y familia. Para Archie y sus amigos, también hay misterios oscuros.', 5, 'https://www.youtube.com/embed/HxtLlByaYTc'),
(1, './posters/1.jpg', 'The Crown', 1, 'Este drama narra las rivalidades políticas y el romance de la reina Isabel II, así como los sucesos que moldearon la segunda mitad del siglo XX.', 4, 'https://www.youtube.com/embed/JWtnJjn6ng0'),
(6, './posters/6.jpg', 'Enola Holmes', 2, 'La hermana menor de Sherlock, descubre que su madre ha desaparecido y se dispone a encontrarla. En su búsqueda, saca a relucir el sabueso que corre por sus venas y se encuentra con una conspiración que gira en torno a un misterioso lord, demostrando que su ilustre hermano no es el único talento en la familia.', NULL, 'https://www.youtube.com/embed/3t1g2pa355k'),
(7, './posters/7.jpg', 'Guasón', 2, 'Arthur Fleck (Phoenix) es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una Serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en el popular personaje de DC Comics Joker, conocido como archivillano de Batman, pero que en este film tomará un cariz más realista y oscuro.', NULL, 'https://www.youtube.com/embed/zAGVQLHvwOY'),
(8, './posters/8.jpg', 'Avengers: End Game', 2, 'Después de los devastadores eventos de los Vengadores: Infinity War (2018), el universo está en ruinas. Con la ayuda de los aliados restantes, los Vengadores se reúnen una vez más para revertir las acciones de Thanos y restaurar el equilibrio del universo.', NULL, 'https://www.youtube.com/embed/TcMBFSGVi1c'),
(9, './posters/9.jpg', 'Juego de tronos', 1, 'En un mundo fantástico y en un contexto medieval varias familias, relativas a la nobleza, se disputan el poder para dominar el territorio ficticio de Poniente (Westeros) y tomar el control de los Siete Reinos desde el Trono de Hierro, lugar donde el rey ejerce el poder.', 8, 'https://www.youtube.com/embed/KPLWWIOCOOQ'),
(10, './posters/10.jpg', 'The Flash', 1, 'Sigue las veloces aventuras de Barry Allen, un joven común y corriente con el deseo latente de ayudar a los demás. Cuando una inesperada partícula aceleradora golpea por accidente a Barry, de pronto se encuentra cargado de un increíble poder para moverse a increíbles velocidades. Mientras Barry siempre ha tenido el alma de un héroe, sus nuevos poderes le han dado la capacidad de actuar como tal.', 6, 'https://www.youtube.com/embed/Yj0l7iGKh8g');

-- Insertar género
INSERT INTO generos (generoId, namegender)
VALUES (1, 'Ciencia Ficción'),
(2, 'Drama'),
(3, 'Suspenso'),
(4, 'Fantasía'),
(5, 'Suceso Real');

-- Inserción de actores

INSERT INTO actores (actorId, nameact)
VALUES (1, 'Pedro Pascal'),(2, 'Carl Weathers'),(3, 'Misty Rosas'),(4, 'Chris Bartlett'),(5, 'Rio Hackford'),(6, 'Giancarlo Esposito'),
(7, 'Tom Hopper'),(8, 'David Castañeda'), (9, 'Emmy Raver-Lampman'),(10, 'Robert Sheehan'),(11, 'Aidan Gallagher'),(12, 'Elliot Page'),
(13, 'Anya Taylor-Joy'),(14, 'Thomas Brodie-Sangster'),(15, 'Harry Melling'),(16, 'Moses Ingram'),(17, 'Chloe Pirrie'),
(18, 'Janina Elkin'),(19, 'Lili Reinhart'),(20, 'Casey Cott'),(21, 'Camila Mendes'),(22, 'Marisol Nichols'),(23, 'Madelaine Petsch'),
(24, 'Mädchen Amick'),(25, 'Claire Fox'),(26, 'Olivia Colman'),(27, 'Matt Smith'),(28, 'Tobias Menzies'),(29, 'Vanesa Kirby'),
(30, 'Helena Bonham Carter'),(31, 'Millie Bobby Brown'),(32, 'Henry Cavill'),(33, 'Sam Claflin'),(34, 'Louis Partridge'),
(35, 'Adeel Akhtar'),(36, 'Joaquin Phoenix'),(37, 'Robert De Niro'),(38, 'Zazie Beetz'), (39, 'Frances Conroy'),
(40, 'Brett Cullen'),(41, 'Shea Whigham'),(42, 'Robert Downey Jr.'),(43, 'Chris Evans'),(44, 'Mark Ruffalo'),(45, 'Chris Hemsworth'),(46, 'Scarlett Johansson'),(47, 'Jeremy Renner'),(48, 'Emilia Clarke'),(49, 'Lena Headey'),(50, 'Sophie Turner'),
(51, 'Kit Harington'),(52, 'Peter Dinklage'),(53, 'Nikolaj Coster-Waldau'),(54, 'Grant Gustin'),(55, 'Carlos Valdes'),(56, 'Danielle Panabaker'),
(57, 'Candice Patton'),(58, 'Jesse L. Martin'),(59, 'Tom Cavanagh');

-- Insertar contenido_generos
INSERT INTO contenido_generos (content_id, gender_id) VALUES (3, 1),(4, 1),(5, 2),(2, 2),(1, 5),(6, 2),(7, 3),(8, 1),(9, 4),(10, 1);

-- Insertar contenido_actores

-- Insertar relaciones entre contenido y actores para "The Mandalorian"
INSERT INTO contenido_actores (content_id, actor_id) VALUES
(3, 1),  -- Pedro Pascal
(3, 2),  -- Carl Weathers
(3, 3),  -- Misty Rosas
(3, 4),  -- Chris Bartlett
(3, 5),  -- Rio Hackford
(3, 6);  -- Giancarlo Esposito

-- Insertar relaciones entre contenido y actores para "The Umbrella Academy"
INSERT INTO contenido_actores (content_id, actor_id) VALUES
(4, 7),  -- Tom Hopper
(4, 8),  -- David Castañeda
(4, 9),  -- Emmy Raver-Lampman
(4, 10), -- Robert Sheehan
(4, 11), -- Aidan Gallagher
(4, 12); -- Elliot Page

-- Insertar relaciones entre contenido y actores para "Gambito de Dama"
INSERT INTO contenido_actores (content_id, actor_id) VALUES
(5, 13), -- Anya Taylor-Joy
(5, 14), -- Thomas Brodie-Sangster
(5, 15), -- Harry Melling
(5, 16), -- Moses Ingram
(5, 17), -- Chloe Pirrie
(5, 18); -- Janina Elkin

-- Insertar relaciones entre contenido y actores para "Riverdale"
INSERT INTO contenido_actores (content_id, actor_id) VALUES
(2, 19), -- Lili Reinhart
(2, 20), -- Casey Cott
(2, 21), -- Camila Mendes
(2, 22), -- Marisol Nichols
(2, 23), -- Madelaine Petsch
(2, 24); -- Mädchen Amick

-- Insertar relaciones entre contenido y actores para "The Crown"
INSERT INTO contenido_actores (content_id, actor_id) VALUES
(1, 25), -- Claire Fox
(1, 26), -- Olivia Colman
(1, 27), -- Matt Smith
(1, 28), -- Tobias Menzies
(1, 29), -- Vanesa Kirby
(1, 30); -- Helena Bonham Carter

-- Insertar relaciones entre contenido y actores para "Enola Holmes"
INSERT INTO contenido_actores (content_id, actor_id) VALUES
(6, 31), -- Millie Bobby Brown
(6, 32), -- Henry Cavill
(6, 33), -- Sam Claflin
(6, 30), -- Helena Bonham Carter
(6, 34), -- Louis Partridge
(6, 35); -- Adeel Akhtar

-- Insertar relaciones entre contenido y actores para "Guasón"
INSERT INTO contenido_actores (content_id, actor_id) VALUES
(7, 36), -- Joaquin Phoenix
(7, 37), -- Robert De Niro
(7, 38), -- Zazie Beetz
(7, 39), -- Frances Conroy
(7, 40), -- Brett Cullen
(7, 41); -- Shea Whigham

-- Insertar relaciones entre contenido y actores para "Avengers: End Game"
INSERT INTO contenido_actores (content_id, actor_id) VALUES
(8, 42), -- Robert Downey Jr.
(8, 43), -- Chris Evans
(8, 44), -- Mark Ruffalo
(8, 45), -- Chris Hemsworth
(8, 46), -- Scarlett Johansson
(8, 47); -- Jeremy Renner

-- Insertar relaciones entre contenido y actores para "Juego de tronos"
INSERT INTO contenido_actores (content_id, actor_id) VALUES
(9, 48), -- Emilia Clarke
(9, 49), -- Lena Headey
(9, 50), -- Sophie Turner
(9, 51), -- Kit Harington
(9, 52), -- Peter Dinklage
(9, 53); -- Nikolaj Coster-Waldau

-- Insertar relaciones entre contenido y actores para "The Flash"
INSERT INTO contenido_actores (content_id, actor_id) VALUES
(10, 54), -- Grant Gustin
(10, 55), -- Carlos Valdes
(10, 56), -- Danielle Panabaker
(10, 57), -- Candice Patton
(10, 58), -- Jesse L. Martin
(10, 59); -- Tom Cavanagh

-- Inserciones en la tabla categoria_generos

INSERT INTO categoria_generos (cat_id, gender_id)
VALUES(1, 1), -- Serie - Ciencia Ficción
    (1, 2), -- Serie - Drama
    (1, 3), -- Serie - Suspenso
    (1, 4), -- Serie - Fantasía
    (1, 5), -- Serie - Suceso Real
    (2, 1), -- Película - Ciencia Ficción
    (2, 2), -- Película - Drama
    (2, 3), -- Película - Suspenso
    (2, 4), -- Película - Fantasía
    (2, 5); -- Película - Suceso Real
