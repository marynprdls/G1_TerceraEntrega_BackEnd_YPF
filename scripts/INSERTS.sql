-- Insertar en la tabla `actores`
INSERT INTO actores (nameact) VALUES
('Leonardo DiCaprio'),
('Natalie Portman'),
('Tom Hardy'),
('Scarlett Johansson'),
('Brad Pitt'),
('Jennifer Lawrence'),
('Matthew McConaughey'),
('Angelina Jolie'),
('Chris Hemsworth'),
('Emma Stone');

-- Insertar en la tabla `categorias`
INSERT INTO categorias (namecat) VALUES
('Pelicula'),
('Serie'),

-- Insertar en la tabla `genero`
INSERT INTO generos (namegender) VALUES
('Aventura'),
('Romántico'),
('Ciencia Ficción'),
('Terror'),
('Comedia'),
('Drama'),
('Acción'),
('Documental'),
('Musical'),
('Thriller');

-- Insertar en la tabla `contenidos`
INSERT INTO contenidos (poster, titulo, resumen, trailer, temporadas, idcategoria) VALUES
('poster1.jpg', 'Inception', 'Un ladrón especializado en la extracción de secretos de los sueños.', 'trailer1.mp4', 1, 1),
('poster2.jpg', 'Black Swan', 'Una joven bailarina se enfrenta a sus propios demonios.', 'trailer2.mp4', 1, 2),
('poster3.jpg', 'The Matrix', 'Un hacker descubre la verdad detrás de la realidad.', 'trailer3.mp4', 1, 4),
('poster4.jpg', 'The Avengers', 'Un grupo de superhéroes se une para salvar al mundo.', 'trailer4.mp4', 1, 1),
('poster5.jpg', 'La La Land', 'Una historia de amor entre una aspirante a actriz y un músico.', 'trailer5.mp4', 1, 9),
('poster6.jpg', 'The Conjuring', 'Una familia enfrenta una fuerza demoníaca en su hogar.', 'trailer6.mp4', 1, 6),
('poster7.jpg', 'Frozen', 'Dos hermanas luchan contra un hechizo de hielo en su reino.', 'trailer7.mp4', 1, 10),
('poster8.jpg', 'Joker', 'La transformación de un hombre en el infame villano del cómic.', 'trailer8.mp4', 1, 2),
('poster9.jpg', 'Interstellar', 'Un equipo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar.', 'trailer9.mp4', 1, 4),
('poster10.jpg', 'Parasite', 'Una familia pobre se infiltra en la vida de una familia rica.', 'trailer10.mp4', 1, 2);

-- Insertar en la tabla `contenido_actores`
INSERT INTO contenido_actores (actoreId, contenidoId, createdAt, updatedAt) VALUES
(1, 1, NOW(), NOW()),
(2, 1, NOW(), NOW()),
(3, 2, NOW(), NOW()),
(4, 2, NOW(), NOW()),
(5, 3, NOW(), NOW()),
(6, 3, NOW(), NOW()),
(7, 4, NOW(), NOW()),
(8, 4, NOW(), NOW()),
(9, 5, NOW(), NOW()),
(10, 5, NOW(), NOW()),
(1, 6, NOW(), NOW()),
(2, 6, NOW(), NOW()),
(3, 7, NOW(), NOW()),
(4, 7, NOW(), NOW()),
(5, 8, NOW(), NOW()),
(6, 8, NOW(), NOW()),
(7, 9, NOW(), NOW()),
(8, 9, NOW(), NOW()),
(9, 10, NOW(), NOW()),
(10, 10, NOW(), NOW());

-- Insertar en la tabla `contenido_generos`
INSERT INTO contenido_generos (generoId, contenidoId, createdAt, updatedAt) VALUES
(1, 1, NOW(), NOW()),
(2, 1, NOW(), NOW()),
(3, 2, NOW(), NOW()),
(4, 2, NOW(), NOW()),
(5, 3, NOW(), NOW()),
(6, 3, NOW(), NOW()),
(7, 4, NOW(), NOW()),
(8, 4, NOW(), NOW()),
(9, 5, NOW(), NOW()),
(10, 5, NOW(), NOW()),
(1, 6, NOW(), NOW()),
(2, 6, NOW(), NOW()),
(3, 7, NOW(), NOW()),
(4, 7, NOW(), NOW()),
(5, 8, NOW(), NOW()),
(6, 8, NOW(), NOW()),
(7, 9, NOW(), NOW()),
(8, 9, NOW(), NOW()),
(9, 10, NOW(), NOW()),
(10, 10, NOW(), NOW());