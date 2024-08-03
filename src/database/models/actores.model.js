/* importación de datatypes: tipo de dato a establecer */

const { DataTypes, Sequelize} = require ('sequelize');

/* importación de sequelize para conectar y desconectar a la base */

const { conectar, cerrar} = require ('../connect.js');

/* Definición de modelos*/

const actores = Sequelize.define ('actores',{
    
    actorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
	
    nameact: {
        type: DataTypes.STRING (100),
        allowNull: false
    },

});

module.exports = actores;