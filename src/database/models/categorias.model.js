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

// Relacion uno a muchos de contenidos y categorias
const contenidos = require ('./contenidos.model.js');

/* relación de la categoria con los contenidos */

categorias.hasMany(contenidos,{
    foreignKey: 'idcategoria',
    sourceKey: 'id'
});

/* relación del contenido con la categoria */
contenidos.belongsTo(categorias,{
    foreignKey: 'idcategoria',
    targetKey: 'id' /*clave objetivo*/
});

//sincronización de modelos
 contenidos.sync()
 categorias.sync()