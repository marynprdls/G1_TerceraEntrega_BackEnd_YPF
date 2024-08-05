/* importación de datatypes: tipo de dato a establecer */

const { DataTypes} = require ('sequelize');

/* importación de sequelize para conectar y desconectar a la base */

const sequelize = require ('../../connect.js');

const contenidos = require ('./contenidos.model.js');
const actores = require ('./actores.model.js');

/* Definición de modelos*/

const contenido_actores = sequelize.define ('contenido_actores',{
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

//sincronización de modelos
 contenidos.sync()
actores.sync()
contenido_actores.sync()