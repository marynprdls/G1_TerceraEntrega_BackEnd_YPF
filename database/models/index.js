/* exportación de datos de configuración */
const config= require ('../../config/config');
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
/* se establecen relaciones entre tablas */
db.categorias = require ("./categorias.model")(sequelize,Sequelize,DataTypes);
db.actores = require ("./actores.model")(sequelize,Sequelize,DataTypes);
db.contenidos = require ("./contenidos.model")(sequelize,Sequelize,DataTypes);
db.generos = require ("./generos.model")(sequelize,Sequelize,DataTypes);

db.contenidos.belongsToMany()