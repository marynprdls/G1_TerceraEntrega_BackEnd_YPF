/* importación de model:permite establecer cual es el modelo
datatypes: tipo de dato a establecer */

const { Model, DataTypes} = require ('sequelize');

/* exportación de sequelize para conectar y desconectar a la base */

const { conectar, cerrar} = require ('../conect_mysql_bd');

/* Definición de modelos*/

/* definición de clase */
class categoria_generos extends Model {} /* model, atributo, permite crear atributos en el modelo*/

/* defino la clase */

categoria_generos = Sequelize.define ('categoria_generos',{
    
    cat_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        FOREIGN KEY (cat_id) REFERENCES categorias(categoriaId),
    }, 
	
    gender_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        FOREIGN KEY (gender_id) REFERENCES generos(generoId),
    },

});

module.exports = categoria_generos;