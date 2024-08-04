// Servidor. 
const express = require('express');

import {sequelize} from './database/connect.js';

import ContenidosRouter from '../controllers/contenidos.js';
import CategoriasRouter from '../controllers/categoria.js';
import ContenidoActoresRouter from '../controllers/contenido_actores.js';

const app = express();
const PORT = require('../config/config.js');

// Para evitar TypeError: Cannot read property '_id' of undefined.
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware.
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    next();
})

// Ruta raiz.
app.get('/', (req, res) => {
    res.status(200).end('Bienvenid@ a la API');
});

//Ruta a controlador de contenidos
app.use(ContenidosRouter);
//Ruta a controlador de categorias
app.use(CategoriasRouter);
//Ruta a controlador de contenido_actores
app.use(ContenidoActoresRouter);


//respuesta para rutas inexistentes 

app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor.
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});
