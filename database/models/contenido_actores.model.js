/* importación de model:permite establecer cual es el modelo
datatypes: tipo de dato a establecer */

const { Model, DataTypes} = require ('sequelize');

/* exportación de sequelize para conectar y desconectar a la base */

const { conectar, cerrar} = require ('../conect_mysql_bd');

/* Definición de modelos*/

/* definición de clase */
class contenido_actores extends Model {} /* model, atributo, permite crear atributos en el modelo*/

/* defino la clase */

contenido_actores = Sequelize.define ('contenido_actores',{
    
    content_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        FOREIGN KEY (content_id) REFERENCES contenidos(id),
    }, 
	
    actor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        FOREIGN KEY (actor_id) REFERENCES actores(actorId),
    },
    
});

module.exports = contenido_actores;