/* importación de datatypes: tipo de dato a establecer */

const { DataTypes} = require ('sequelize');

/* importación de sequelize para conectar y desconectar a la base */
const sequelize = require ('../../connect.js');

/* Definición de modelos*/

const categorias = sequelize.define('categorias',{
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
	
    namecat: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
},
{
    timestamps:false
});

module.exports = categorias;



