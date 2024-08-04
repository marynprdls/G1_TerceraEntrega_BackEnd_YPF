const express = require('express');
const CategoriasRouter = express.Router();

const Categorias = require('../src/database/models/contenidos.model.js');

// INDEX /api/categoria
CategoriasRouter.get('/', (req, res) => {
    Categorias.findAll().then(categoria => {
        res.json(categoria);
    })
})

// CREATE
CategoriasRouter.post('/', (req, res) => {
    Categorias.create({
        nombrecat: req.body.namecat,
        /* */
        
        /* ver*/
    }).then(categoria => {
        res.json(categoria);
    })
});

// READ /api/categoria/:id
CategoriasRouter.get('/:id', (req, res) => {
    Categorias.findByPk(req.params.id).then(categoria => {
        res.json(categoria);
    })
});

// UPDATE /api/categoria/:id
CategoriasRouter.patch('/:id', (req, res) => {
    Categorias.update({
        nombrecat: req.body.namecat,
        /* */
        
        /* ver*/
    }, {
        where: {
            id: req.params.id
        }
    }).then(categoria => {
        res.json(categoria);
    });
});

// DELETE /api/categoria/:id
CategoriasRouter.delete('/:id', (req, res) => {
    Categorias.destroy({
        where: {
            id: req.params.id
        }
    }).then(categoria => {
        res.json(categoria);
    })
});

module.exports = CategoriasRouter;