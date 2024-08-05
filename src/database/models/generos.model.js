/* importación de datatypes: tipo de dato a establecer */

const { DataTypes} = require ('sequelize');

/* importación de sequelize para conectar y desconectar a la base */

const sequelize = require ('../../connect.js');

/* Definición de modelos*/

const generos = sequelize.define ('generos',{
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
	
    namegender: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

});

module.exports = generos;