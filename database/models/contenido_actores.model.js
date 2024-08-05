/* importación de datatypes: tipo de dato a establecer */

const { DataTypes, Sequelize} = require ('sequelize');

/* importación de sequelize para conectar y desconectar a la base */

import sequelize from '../connect.js';

import {contenidos} from './contenidos.model.js';
import {actores} from './actores.model.js';

/* Definición de modelos*/

const contenido_actores = Sequelize.define ('contenido_actores',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
});

module.exports = contenido_actores;


// relaciones genero una tabla aux 
actores.belongsToMany(contenidos, {
    through: 'contenido_actores'
});

contenidos.belongsToMany(actores, {
    through: 'contenido_actores'
});