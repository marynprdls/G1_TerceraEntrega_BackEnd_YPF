/* exportación de datos de configuración */
const {database}= require ('../../../config/config');

/* genero nueva instancia de sequelize */
const { Sequelize, DataTypes, Op } = require('sequelize');

const sequelize = new Sequelize(database.DB_NAME, database.DB_USER, database. DB_PASSWORD, {
    host: database.DB_HOST,
    dialect: database.DB_DIALECT,
    dialectOptions:{options:{encrypt:true}},
    define:{timestamps:false}
  });

/* conexión a base de datos vacia, que corresponde a la nueva instancia sequelize definida
, luego se definen los datos */

const db = {};

/* defino sequelize, las opciones op, luego se redefine */

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

/* Extrae todos los modelos */
/* Conexión de tablas */

db.categorias = require ("./categorias.model")(sequelize,Sequelize,DataTypes);
db.actores = require ("./actores.model")(sequelize,Sequelize,DataTypes);
db.contenidos = require ("./contenidos.model")(sequelize,Sequelize,DataTypes);
db.generos = require ("./generos.model")(sequelize,Sequelize,DataTypes);

/* se establecen relaciones entre tablas */

/* relacion entre contenidos y categorias */
db.contenidos.belongsToMany(db.categorias,{
  through: 'contenido_categoria',
  ForeignKey:'categoria',
  otherKey: 'categoriaId'
})
db.categorias.belongsToMany(db.contenidos,{
  through: 'contenido_categoria',
  ForeignKey:'categoriaId',
  otherKey: 'categoria'
})

/* relacion entre contenidos y actores */
db.contenidos.belongsToMany(db.actores,{
  through: 'contenido_actores',
  ForeignKey:'content_id',
  otherKey: 'id'
})
db.actores.belongsToMany(db.contenidos,{
  through: 'contenido_actores',
  ForeignKey:'actor_id',
  otherKey: 'actorId'
})

/* relacion entre contenidos y generos */
db.contenidos.belongsToMany(db.generos,{
  through: 'contenido_generos',
  ForeignKey:'gender_id',
  otherKey: 'generoId'
})
db.generos.belongsToMany(db.contenidos,{
  through: 'contenido_generos',
  ForeignKey:'content_id',
  otherKey: 'id'
})

/* relacion entre categorias y generos */
db.categorias.belongsToMany(db.generos,{
  through: 'categoria_generos',
  ForeignKey:'gender_id',
  otherKey: 'generoId'
})
db.generos.belongsToMany(db.categorias,{
  through: 'categoria_generos',
  ForeignKey:'cat_id',
  otherKey: 'categoriaId'
})


module.exports = db;