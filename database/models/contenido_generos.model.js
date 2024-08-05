/* importación de datatypes: tipo de dato a establecer */

const { DataTypes, Sequelize} = require ('sequelize');

/* importación de sequelize para conectar y desconectar a la base */

import sequelize from '../connect.js';

import {contenidos} from './contenidos.model.js';
import {generos} from './generos.model.js';

/* Definición de modelos*/

const contenido_generos = Sequelize.define ('contenido_generos',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
});

module.exports = contenido_generos;


// relaciones genero una tabla aux 
generos.belongsToMany(contenidos, {
    through: 'contenido_generos'
});

contenidos.belongsToMany(generos, {
    through: 'contenido_generos'
});