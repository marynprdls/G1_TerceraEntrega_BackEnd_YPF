/* importación de datatypes: tipo de dato a establecer */

const { DataTypes} = require ('sequelize');

/* importación de sequelize para conectar y desconectar a la base */

const sequelize = require ('../../connect.js');



/* Definición de modelos*/

const contenido_generos = sequelize.define ('contenido_generos',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
},
{
    timestamps:false
});

module.exports = contenido_generos;

