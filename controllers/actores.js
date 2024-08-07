const express = require('express');
const ActoresRouter = express.Router();
const db = require("../src/database/models");
    const Generos = db.generos;
    const Contenidos = db.contenidos;
    const categoria = db.categorias;
    const Actores = db.actores;
    const Op = db.Op;

// INDEX /api/reparto
// Obtener todos los actores/actrices
ActoresRouter.get('/', async(req, res) => {
    try{
        const reparto= await Actores.findAll(); 
        res.json(reparto);  
    }catch (error){
        console.error('Error al consultar reparto:', error);
        res.status(500).json({error:'Error al consultar reparto'});
    }     
});

// CREATE /api/reparto
// Creación de actor/actriz
ActoresRouter.post('/', async (req, res) => {
    try{
        // Validate request
        if (!req.body.titulo) {
            res.status(400).send({
            message: "Content can not be empty!"
            });
            return;
        }
        const { id, nameact} = req.body;
        const newcast = await Actores.create ({ id, nameact});
        res.status(201).json(newcast);
    } catch (error){
        console.error('Error al crear actor/actriz:', error);
        res.status(500).json({error:'Error al crear actor/actriz'});
    }
});

//Buscar actor/actriz por su id, ubica un solo registro
// READ /api/reparto/:id
ActoresRouter.get('/:id',async (req, res) => {
    try{
        const castId= req.params.id;
        const reparto = await Actores.findByPk(castId);
        !reparto ? res.status(404).json({error:'Contenido no encontrado'})
                 : res.json(reparto);
    }catch (error){
        console.error('Error al buscar actor/actriz', error);
        res.status(500).json({error:'Error al buscar actor/actriz'});
    }
});

// modificar un registro existente
// UPDATE /api/reparto/:id
ActoresRouter.put('/:id', async (req, res) => {
    try{
        const castId= req.params.id;
        const updateData= req.body;
        const updatecast = await Actores.findByPk(castId);
        !updatecast ? res.status(404).json({error:'Contenido no encontrado'})
                        : await updatecast.update(updateData);
        res.json(updatecast);
    }catch (error){
        console.error('Error al actualizar registro:', error);
        res.status(500).json({error:'Error al actualizar registro'});
    }
});

//eliminamos un registro existente
// DELETE /api/reparto/:id
ActoresRouter.delete('/:id', async(req, res) => {
    try{
        const castId= req.params.id;
        const reparto = await Actores.findByPk(castId);
        !reparto ? res.status(404).json({error:'Contenido no encontrado'})
                        : await reparto.destroy();
        res.json({message:'reparto eliminado correctamente'});
    }catch (error){
        console.error('Error al eliminar reparto:', error);
        res.status(500).json({error:'Error al eliminar reparto'});
    } 
});


module.exports = ActoresRouter;