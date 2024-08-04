const express = require('express');
const ContenidoActoresRouter = express.Router();

const Contenidos = require('../src/database/models/contenidos.model.js');
const Actores = require('../src/database/models/actores.model.js')
const Contenido_actores = require('../src/database/models/contenido_actores.model.js')

ContenidoActoresRouter.get('/contenido/reparto', (req, res) => {
    Actores.findAll().then(contenido => {
        res.json(contenido);
    })
});

ContenidoActoresRouter.get('/reparto/contenido', (req, res) => {
    Contenidos.findAll().then(reparto => {
        res.json(reparto);
    })
});



module.exports = ContenidoActoresRouter;