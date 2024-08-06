const { Sequelize, DataTypes, Op } = require("sequelize");
const { datab } = require('../../config.js');

const sequelize = new Sequelize(
    datab.DB_NAME, 
    datab.DB_USER,
    datab.DB_PASSWORD,
    {
        host: datab.DB_HOST,
        port: datab.DB_PORT,
        dialect: datab.DB_DIALECT
       
    }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;
// incializo las tablas
db.contenidos = require ('./models/contenidos.model.js')(sequelize, Sequelize, DataTypes);
db.categorias = require ('./models/categorias.model.js')(sequelize, Sequelize, DataTypes);
db.actores = require ('./models/actores.model.js')(sequelize, Sequelize, DataTypes);
db.generos = require ('./models/generos.model.js')(sequelize, Sequelize, DataTypes);
// relaciones genero tablas auxiliares

const contenidos= db.contenidos;
const categorias= db.categorias;
const actores= db.actores;
const generos=db.generos;
// Relacion uno a muchos de contenidos y categorias

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


// relaciones contenidos y actores
actores.belongsToMany(contenidos, {
    through: 'contenido_actores'
});

contenidos.belongsToMany(actores, {
    through: 'contenido_actores'
});



// relaciones contenidos y generos 
generos.belongsToMany(contenidos, {
    through: 'contenido_generos'
});

contenidos.belongsToMany(generos, {
    through: 'contenido_generos'
});



// Sync database and call initial function
sequelize.sync().then(() => {
    
}).catch(err => {
    console.error("Error syncing database:", err);
});

module.exports = db;