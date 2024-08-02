/* importación de model:permite establecer cual es el modelo
datatypes: tipo de dato a establecer */

const { Model, DataTypes} = require ('sequelize');

/* exportación de sequelize para conectar y desconectar a la base */

const { conectar, cerrar} = require ('../conect_mysql_bd');

/* Definición de modelos*/

/* definición de clase */
class categorias extends Model {} /* model, atributo, permite crear atributos en el modelo*/

/* defino la clase */

categorias = Sequelize.define ('categorias',{
    
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