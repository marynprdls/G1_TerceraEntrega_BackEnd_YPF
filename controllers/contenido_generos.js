const express = require('express');
const ContenidoGenerosRouter = express.Router();

const Contenidos = require('../src/database/models/contenidos.model.js');
const Generos = require('../src/database/models/generos.model.js')
const Contenido_generos = require('../src/database/models/contenido_generos.model.js')

ContenidoGenerosRouter.get('/contenido/genero', (req, res) => {
    Generos.findAll().then(contenido => {
        res.json(contenido);
    })
});

ContenidoGenerosRouter.get('/genero/contenido', (req, res) => {
    Contenidos.findAll().then(genero => {
        res.json(genero);
    })
});



module.exports = ContenidoGenerosRouter;