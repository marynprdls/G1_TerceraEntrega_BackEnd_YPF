const express = require('express');
const ActoresRouter = express.Router();

const Actores = require('../src/database/models/actores.model.js');

// INDEX /api/reparto
ActoresRouter.get('/', (req, res) => {
    Actores.findAll().then(reparto => {
        res.json(reparto);
    })
})

// CREATE
ActoresRouter.post('/', (req, res) => {
    Actores.create({
        nombre: req.body.nameact,
        /* */
        
        /* ver*/
    }).then(reparto => {
        res.json(reparto);
    })
});

// READ /api/reparto/:id
ActoresRouter.get('/:id', (req, res) => {
    Actores.findByPk(req.params.id).then(reparto => {
        res.json(reparto);
    })
});

// UPDATE /api/reparto/:id
ActoresRouter.patch('/:id', (req, res) => {
    Actores.update({
        nombre: req.body.namegender,
        /* */
        
        /* ver*/
    }, {
        where: {
            id: req.params.id
        }
    }).then(reparto => {
        res.json(reparto);
    });
});

// DELETE /api/reparto/:id
ActoresRouter.delete('/:id', (req, res) => {
    Actores.destroy({
        where: {
            id: req.params.id
        }
    }).then(reparto => {
        res.json(reparto);
    })
});

module.exports = ActoresRouter;