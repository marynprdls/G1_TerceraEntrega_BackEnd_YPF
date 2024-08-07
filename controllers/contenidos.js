const express = require('express');
const routerContenidos = express.Router();

const Contenidos = require('../src/database/models/contenidos.model.js');

// CREATE
// Creación de contenido
routerContenidos.post('/contenidos', async(req, res) => {
    try{
        // Validate request
        if (!req.body.titulo) {
            res.status(400).send({
            message: "Content can not be empty!"
            });
            return;
        }
        const { id, poster, titulo, 
            resumen, temporadas, trailer} = req.body;
        const newcontent = await Contenidos.create ({ id, poster, titulo, 
            resumen, temporadas, trailer});
        res.status(201).json(newcontent);
    }
    catch (error){
        console.error('Error al crear el producto:', error);
        res.status(500).json({error:'Error al crear el producto'});
    }
    
});


// INDEX /api/contenido
routerContenidos.get('/', (req, res) => {
    Contenidos.findAll().then(contenido => {
        res.json(contenido);
    })
})



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