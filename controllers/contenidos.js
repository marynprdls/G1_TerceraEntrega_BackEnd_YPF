const express = require('express');
const routerContenidos = express.Router();
const db = require("../src/database/models");
    const Generos = db.generos;
    const Contenidos = db.contenidos;
    const categoria = db.categorias;
    const reparto = db.actores;
    const Op = db.Op;

// CREATE
// Creación de contenido /api/contenido/contenidos
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
        console.error('Error al crear el contenido:', error);
        res.status(500).json({error:'Error al crear el contenido'});
    }
    
});

//GET
// Obtener todos los contenidos  /api/contenido/contenidos
routerContenidos.get('/contenidos', async(req, res) => {
    try{
        const content = await Contenidos.findAll({
            include:[{
                    model:reparto,
                    //cambiarle al nombre en la presentacion
                    //atributos del contenido
                    attributes: ['nameact'],
                    through:{
                        // si no tiene nada [] no se incluye atributos de la tabla union
                        attributes: []
                    }
                },{
                    model:Generos,
                    //cambiarle al nombre en la presentacion
                    //atributos del contenido
                    attributes: ['namegender'],
                    through:{
                        // si no tiene nada [] no se incluye atributos de la tabla union
                        attributes: []
                    }
                }]
            });
        res.json(content);
    } catch (error){
        console.error('Error al consultar los contenidos:', error);
        res.status(500).json({error:'Error al consultar los contenidos'});
    }
});


//Buscar contenido por su id, ubica un solo registro
// READ /api/contenido/:id
routerContenidos.get('/:id', async (req, res) => {
    try{
        const contentId= req.params.id;
        const content = await Contenidos.findByPk(contentId);

        !content ? res.status(404).json({error:'Contenido no encontrado'})
                 : res.json(content);
    }catch (error){
        console.error('Error al buscar el contenido', error);
        res.status(500).json({error:'Error al buscar el contenido'});
    }
});

// modificar un registro existente
// UPDATE /api/contenido/:id
routerContenidos.put('/:id', async(req, res) => {
    try{
        const contentId= req.params.id;
        const updateData= req.body;
        const updatecontent = await Contenidos.findByPk(contentId);
        !updatecontent ? res.status(404).json({error:'Contenido no encontrado'})
                        : await updatecontent.update(updateData);
        res.json(updatecontent);
    }catch (error){
        console.error('Error al actualizar el contenido', error);
        res.status(500).json({error:'Error al actualizar el contenido'});
    } 
});

//eliminamos un registro existente
// DELETE /api/contenido/:id
routerContenidos.delete('/:id',async (req, res) => {
    try{
        const contentId= req.params.id;
        const content = await Contenidos.findByPk(contentId);

        !content ? res.status(404).json({error:'Contenido no encontrado'})
                        : await content.destroy();
        res.json({message:'Contenido eliminado correctamente'});
    }catch (error){
        console.error('Error al eliminar el contenido', error);
        res.status(500).json({error:'Error al eliminar el contenido'});
    } 
});

module.exports = routerContenidos;