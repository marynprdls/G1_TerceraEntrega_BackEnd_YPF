const express = require('express');
const GenerosRouter = express.Router();

const Generos = require('../src/database/models/generos.model.js');

// INDEX /api/generos
GenerosRouter.get('/', (req, res) => {
    Generos.findAll().then(generos => {
        res.json(generos);
    })
})

// CREATE
GenerosRouter.post('/', (req, res) => {
    Generos.create({
        nombre: req.body.namegender,
        /* */
        
        /* ver*/
    }).then(generos => {
        res.json(generos);
    })
});

// READ /api/genero/:id
GenerosRouter.get('/:id', (req, res) => {
    Generos.findByPk(req.params.id).then(genero => {
        res.json(genero);
    })
});

// UPDATE /api/genero/:id
GenerosRouter.patch('/:id', (req, res) => {
    Generos.update({
        nombre: req.body.namegender,
        /* */
        
        /* ver*/
    }, {
        where: {
            id: req.params.id
        }
    }).then(genero => {
        res.json(genero);
    });
});

// DELETE /api/genero/:id
GenerosRouter.delete('/:id', (req, res) => {
    Generos.destroy({
        where: {
            id: req.params.id
        }
    }).then(genero => {
        res.json(genero);
    })
});

module.exports = GenerosRouter;