/* importación de model:permite establecer cual es el modelo
datatypes: tipo de dato a establecer */

const { Model, DataTypes, ForeignKeyConstraintError, Sequelize} = require ('sequelize');

/* exportación de sequelize para conectar y desconectar a la base */

const { conectar, cerrar} = require ('../conect_mysql_bd');
const { defaultValueSchemable } = require('sequelize/lib/utils');

/* Definición de modelos*/

/* definición de clase */
class contenidos extends Model {} /* model, atributo, permite crear atributos en el modelo*/

/* defino la clase */

contenidos = Sequelize.define ('contenidos',{
    
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
    categoria: {
        type: DataTypes.INTEGER,
        ForeignKey: true,
        FOREIGN KEY (categoria) REFERENCES categorias(categoriaId),
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
	 
	{
        timestamps: true,
        underscrored:true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }

});

module.exports = contenidos;