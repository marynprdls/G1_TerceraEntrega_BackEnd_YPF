/* importación de datatypes: tipo de dato a establecer */

const { DataTypes, Sequelize} = require ('sequelize');

/* importación de sequelize para conectar y desconectar a la base */

const { conectar, cerrar} = require ('../connect.js');

/* Definición de modelos*/

const contenidos = Sequelize.define ('contenidos',{
    
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
    poster: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
	resumen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    temporadas: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    trailer: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
},{
    timestamps: true,
    underscored: true,
});

module.exports = contenidos;