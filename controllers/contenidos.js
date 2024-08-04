const express = require('express');
const routerContenidos = express.Router();

const Contenidos = require('../src/database/models/contenidos.model.js');

// INDEX /api/contenido
routerContenidos.get('/', (req, res) => {
    Contenidos.findAll().then(contenido => {
        res.json(contenido);
    })
})

// CREATE
routerContenidos.post('/', (req, res) => {
    Contenidos.create({
        titulo: req.body.titulo,
        /* */
        body: req.body.body
        /* ver*/
    }).then(contenido => {
        res.json(contenido);
    })
});

// READ /api/contenido/:id
routerContenidos.get('/:id', (req, res) => {
    Contenidos.findByPk(req.params.id).then(contenido => {
        res.json(contenido);
    })
});

// UPDATE /api/contenido/:id
routerContenidos.patch('/:id', (req, res) => {
    Contenidos.update({
        titulo: req.body.titulo,
        /* */
        body: req.body.body
        /* */
    }, {
        where: {
            id: req.params.id
        }
    }).then(contenido => {
        res.json(contenido);
    });
});

// DELETE /api/contenido/:id
routerContenidos.delete('/:id', (req, res) => {
    Contenidos.destroy({
        where: {
            id: req.params.id
        }
    }).then(contenido => {
        res.json(contenido);
    })
});

module.exports = routerContenidos;