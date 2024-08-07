const express = require('express');
const ContenidoGenerosRouter = express.Router();
const db = require("../src/database/models");
    
    const Generos = db.generos;
    const Contenido = db.contenidos;
    const categoria = db.categorias;
    const Actores = db.actores;
    const Op = db.Op;

// Endpoint devuelve contenidos según el genero
 //api/contenidosgeneros/genero   
ContenidoGenerosRouter.get('/genero', (req, res) => {
        Generos.findAll({
            include:{
                model:Contenido,
                through:{
                    // si no tiene nada [] no se incluye atributos de la tabla union
                    attributes: []
                }
        }})
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.send(500).send({
                        message:err.message || "algo malo paso cuando se trajeron los datos"
                    })
                })
        })
// Endpoint devuelve los generos de cada contenido
 //api/contenidosgeneros/contenido
ContenidoGenerosRouter.get('/contenido', (req, res) => {
    Contenido.findAll({
        include:{
            model:Generos,
            attributes: ['namegender'],
            through:{
                // si no tiene nada [] no se incluye atributos de la tabla union
                attributes: []
            }
    }})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.send(500).send({
                    message:err.message || "algo malo paso cuando se trajeron los datos"
                })
            })
});



module.exports = ContenidoGenerosRouter;