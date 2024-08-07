const express = require('express');
const CategoriasRouter = express.Router();

const db = require("../src/database/models");
    const Generos = db.generos;
    const Contenidos = db.contenidos;
    const Categorias = db.categorias;
    const reparto = db.actores;
    const Op = db.Op;

// INDEX /api/categoria
// Obtener todos las categorias
CategoriasRouter.get('/', async(req, res) => {
    try{
        const categoria= await Categorias.findAll(); 
        res.json(categoria);  
        }catch (error){
            console.error('Error al consultar categoria:', error);
            res.status(500).json({error:'Error al consultar categoria'});
        }  
})

// CREATE
// Creación de categoria /api/categoria
CategoriasRouter.post('/', async(req, res) => {
    try{
        // Validate request
        if (!req.body.namecat) {
            res.status(400).send({
            message: "Content can not be empty!"
            });
            return;
        }
        const {id,namecat} = req.body;
        const newcat = await Categorias.create ({id,namecat});
        res.status(201).json(newcat);
    }catch (error){
        console.error('Error al crear categoria:', error);
        res.status(500).json({error:'Error al crear categoria'});
    }
    
});

//Buscar categoria por su id, ubica un solo registro
// READ /api/categoria/:id
CategoriasRouter.get('/:id', async(req, res) => {
    try{
        const catId= req.params.id;
        const contentcat = await Categorias.findByPk(catId);

        !contentcat ? res.status(404).json({error:'categoria no encontrada'})
                 : res.json(contentcat);

    }catch (error){
        console.error('Error al buscar categoria', error);
        res.status(500).json({error:'Error al buscar categoria'});
    }
});

//4- Ver solo películas. Ver solo series.
// READ /api/categoria/nombrecategoria/serie
// READ /api/categoria/nombrecategoria/pelicula
CategoriasRouter.get('/nombrecategoria/:nombrecategoria', async(req, res) => {
    try{
        // Obtener el nombre de categoria de los parámetros de consulta
        const nombrecategoria = req.params.nombrecategoria;
        //verifica ingreso de título
        if(!nombrecategoria) {
            return res.status(404).json({error:'Se tiene que ingresar categoria para la búsqueda'});
        }
        //busqueda
        const content = await Contenidos.findAll({
            include:{
                model: Categorias,
                where: { namecat:{[Op.like]:`%${nombrecategoria}%`}}
            }
        });
        //verifica si se encontraron resultados
        if(content.length === 0) {
            return res.status(404).json({error:'contenido no encontrado'});
        }         
        res.json(content);

    }catch (error){
        console.error('Error al buscar contenido por categoria', error);
        res.status(500).json({error:'Error al buscar contenido por categoria'});
    }
});

// modificar una categoria existente
// UPDATE /api/categoria/:id
CategoriasRouter.put('/:id', async(req, res) => {
    try{
        const catId= req.params.id;
        const updateData= req.body;
        const updatecat = await Categorias.findByPk(catId);
        !updatecat ? res.status(404).json({error:'Categoria no encontrada'})
                        : await updatecat.update(updateData);
        res.json(updatecat);
    }catch (error){
        console.error('Error al actualizar categoria', error);
        res.status(500).json({error:'Error al actualizar categoria'});
    } 
      
});

//eliminar una categoria existente
// DELETE /api/categoria/:id
CategoriasRouter.delete('/:id',async(req, res) => {
    try{
        const catId= req.params.id;
        const contentcat = await Categorias.findByPk(catId);

        !contentcat ? res.status(404).json({error:'Categoria no encontrada'})
                        : await contentcat.destroy();

        res.json({message:'Categoria eliminada correctamente'});
        
    }catch (error){
        console.error('Error al eliminar la categoria:', error);
        res.status(500).json({error:'Error al eliminar la categoria'});
    } 
});

module.exports = CategoriasRouter;