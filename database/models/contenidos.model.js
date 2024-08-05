/* // importación de datatypes: tipo de dato a establecer 

const { DataTypes, Sequelize} = require ('sequelize');

// importación de sequelize para conectar y desconectar a la base 

const{sequelize} = require ('../connect.js');

// Definición de modelos

const contenidos = sequelize.define('contenidos',{ */

module.exports = (sequelize, Sequelize, DataTypes) => {  
    const Contenido = sequelize.define( 
        "contenidos",
        {
            id: {
                type: DataTypes.INTEGER,
                
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
                //allowNull: false
            },
            generoId:{
                type:DataTypes.INTEGER,
                defaultValue:0,
                references:{
                    model:'generos',
                    key:'id'
                }
            }
    },
    {
        timestamps: true,
        underscored: true,
    }
);

//module.exports = contenidos;
return Contenido;
}