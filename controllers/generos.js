const express = require('express');
const GenerosRouter = express.Router();
const db = require("../src/database/models");
    
    const Generos = db.generos;
    const Contenidos = db.contenidos;
    const categoria = db.categorias;
    const Actores = db.actores;
    const Op = db.Op;

// INDEX /api/generos/acci
GenerosRouter.get('/:title?', async(req, res) => {
    try{
        const title = req.params.title;
        console.log(title);
        var condicion= title ? {namegender:{[Op.like]:`%${title}%`}}:null;

        const content = await Generos.findAll({where:condicion})
                
        res.send(content);

    }catch (error){
        console.error('Error al consultar reparto:', error);
        res.status(500).json({error:'Error al consultar reparto'});
    }  
})

// READ /api/genero/:id
GenerosRouter.get('/id/:id', (req, res) => {
    Generos.findByPk(req.params.id).then(genero => {
        res.json(genero);
    })
});


// CREATE /api/genero/:id
GenerosRouter.post('/', async(req, res) => {
console.log("ho"+req.body.namegender)
    try{
        // Validate request
        if (!req.body.namegender ) {
            res.status(400).send({
            message: "Content can not be empty!"
            });
            return;
        }
        const nuevo = await Generos.create ({ 
            namegender: req.body.namegender,
        });
        res.status(201).json(nuevo);
    }
    catch (error){
        console.error('Error al crear el genero:', error);
        res.status(500).json({error:'Error al crear el genero'});
    }
});


// UPDATE /api/genero/:id
GenerosRouter.patch('/:id', (req, res) => {
    Generos.update({
        namegender: req.body.namegender,
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