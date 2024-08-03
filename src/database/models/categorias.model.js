/* importación de datatypes: tipo de dato a establecer */

const { DataTypes, Sequelize} = require ('sequelize');

/* importación de sequelize para conectar y desconectar a la base */

const { conectar, cerrar} = require ('../connect.js');

/* Definición de modelos*/

const categorias = Sequelize.define ('categorias',{
    
    categoriaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
	
    namecat: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
});

module.exports = categorias;