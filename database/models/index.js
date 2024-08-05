const { Sequelize,DataType,Op, DataTypes } = require("sequelize");
const { database }  = require("../../config/config.js");

const sequelize = new Sequelize(
    database.DB_NAME, 
    database.DB_USER, 
    database.DB_PASSWORD, {
  
      host: database.DB_HOST,
      dialect: database.DB_DIALECT,
      dialectOptions:{options:{encrypt:true}},
      define:{timestamps:false}
  
    });

const db = {}

db.Sequelize=Sequelize;
db.Op = Op;
db.sequelize=sequelize;

//db.actores=require("./actores.model.js")(sequelize,Sequelize,DataTypes);
//db.categorias=require("./categorias.model.js")(sequelize,Sequelize,DataTypes);
db.contenidos=require("./contenidos.model.js")(sequelize,Sequelize,DataTypes);
db.generos=require("./generos.model.js")(sequelize,Sequelize,DataTypes);


//La opción foreignKey: 'generoId' especifica que la columna generoId en la tabla Contenidos actúa como la clave foránea que se refiere al id en la tabla Generos.
db.generos.hasMany(db.contenidos,{foreignKey:'generoId'});

//La opción foreignKey: 'generoId' especifica que la columna generoId en la tabla Contenidos es la clave foránea que hace referencia al id en la tabla Generos
db.contenidos.belongsTo(db.generos,{foreignKey:'generoId'});



module.exports=db;

