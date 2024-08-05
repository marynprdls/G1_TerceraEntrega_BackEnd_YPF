/* importación de datatypes: tipo de dato a establecer */

const { DataTypes} = require ('sequelize');

/* importación de sequelize para conectar y desconectar a la base */

const sequelize = require ('../../connect.js');

/* Definición de modelos*/

const actores = sequelize.define ('actores',{
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
	
    nameact: {
        type: DataTypes.STRING (100),
        unique: true,
        allowNull: false
    },

},{
    timestamps: false
});

module.exports = actores;
