/* importación de datatypes: tipo de dato a establecer */

const { DataTypes} = require ('sequelize');

/* importación de sequelize para conectar y desconectar a la base */

const sequelize = require ('../../connect.js');

const contenidos = require ('./contenidos.model.js');
const generos = require ('./generos.model.js');

/* Definición de modelos*/

const contenido_generos = sequelize.define ('contenido_generos',{
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

//sincronización de modelos
contenidos.sync()
generos.sync()
contenido_generos.sync()