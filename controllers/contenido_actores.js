const express = require('express');
const ContenidoActoresRouter = express.Router();
const db = require("../src/database/models");
    const Generos = db.generos;
    const Contenidos = db.contenidos;
    const Categorias = db.categorias;
    const Actores = db.actores;
    const Op = db.Op;
    const Contenido_actores = db.contenido_actores;


// Obtener todos los contenidos según actor/Actriz
//GET /api/contenido_actores/reparto/contenido
ContenidoActoresRouter.get('/reparto/contenido',async(req, res) => {
    try{
        const reparto = await Actores.findAll({
            include:[{
                model:Contenidos,
                //cambiarle al nombre en la presentacion
                //atributos del contenido
                attributes: ['titulo'],
                through:{
                    // si no tiene nada [] no se incluye atributos de la tabla union
                    attributes: []
                }
            }]
        })
        res.json(reparto);
    }catch (error){
        console.error('Error al consultar filmografia de Actor/actriz:', error);
        res.status(500).json({error:'Error al consultar filmografia de Actor/actriz'});
    }
});

// ContenidoActoresRouter.get('/reparto/contenido', (req, res) => {
//     Contenidos.findAll().then(reparto => {
//         res.json(reparto);
//     })
// });


// Obtener todos los actor/Actriz según contenidos
//GET /api/contenido_actores/contenido/reparto
ContenidoActoresRouter.get('/contenido/reparto',async(req, res) => {
    try{
        const contenido = await Contenidos.findAll({
            include:[{
                model:Actores,
                //cambiarle al nombre en la presentacion
                //atributos del contenido
                attributes: ['nameact'],
                through:{
                    // si no tiene nada [] no se incluye atributos de la tabla union
                    attributes: []
                }
            }]
        })
        res.json(contenido);
    }catch (error){
        console.error('Error al consultar reparto:', error);
        res.status(500).json({error:'Error al consultar reparto'});
    }
});


module.exports = ContenidoActoresRouter;