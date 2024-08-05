const db = require("./database/models/index")

db.sequelize.sync().then(()=>{
    initial();
}).catch(err=>{
    console.log("Error syncing database",err);
});

const Genero=db.generos;
const Contenido=db.contenidos;


function initial(){

    Genero.create({namegender:"peliculas"})
    Genero.create({namegender:"series"})
    Contenido.create({
        poster: "poster",
        titulo: "titulos",
        resumen: "remuesito",
        temporadas: 2,
        generoId:1
    })
}



/* // Servidor. 
const express = require('express');

import {sequelize} from './database/connect.js';

import ContenidosRouter from '../controllers/contenidos.js';
import CategoriasRouter from '../controllers/categoria.js';
import GenerosRouter from '../controllers/generos.js';
import ActoresRouter from '../controllers/actores.js';
import ContenidoActoresRouter from '../controllers/contenido_actores.js';
import ContenidoGenerosRouter from '../controllers/contenido_generos.js'

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
//Ruta a controlador de generos
app.use(GenerosRouter);
//Ruta a controlador de actores
app.use(ActoresRouter);
//Ruta a controlador de contenido_actores
app.use(ContenidoActoresRouter);
//Ruta a controlador de contenido_generos
app.use(ContenidoGenerosRouter);


//respuesta para rutas inexistentes 

app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor.
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
}); */