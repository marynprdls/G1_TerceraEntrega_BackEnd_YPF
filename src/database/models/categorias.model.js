/* importación de datatypes: tipo de dato a establecer */

const { DataTypes, Sequelize} = require ('sequelize');

/* importación de sequelize para conectar y desconectar a la base */

const { conectar, cerrar} = require ('../connect.js');

import { contenidos } from './contenidos.model.js';

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
        unique: true,
        allowNull: false
    },
},
{
    timestamps:false
});

module.exports = categorias;

/* relación de la categoria con los empleados */

categorias.hasMany(contenidos,{
    foreignKey: 'categoria',
    sourceKey: 'categoriaId'
}) 

/* relación del contenido con la categoria */
contenidos.belongsTo(categorias,{
    foreignKey: 'categoria',
    targetKey: 'categoriaId' /*clave objetivo*/
}) 