// ENVIRONMENT
const dotenv = require('dotenv');
dotenv.config();

// conexión con info de base de datos
const {database}= require ('../config/config');


/* Establece conexion a base de datos */
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  database.DB_NAME, 
  database.DB_USER, 
  database.DB_PASSWORD, {

    host: database.DB_HOST,
    dialect: database.DB_DIALECT,
    dialectOptions:{options:{encrypt:true}},
    define:{timestamps:false}

  });

/* función para autenticar la conexión a la base de datos. */

sequelize.authenticate().then(() => {
  console.log('Conexión a la base de datos establecida correctamente.');
}).catch((error) => {
  console.error('Error al conectar a la base de datos:', error);
});

/*
async function conectar () {
  try{
    await sequelize.authenticate();
    console.log ('Conexión a la base de datos establecida correctamente.');
  }
  catch (error){
    console.error('Error al conectar a la base de datos:',error);
  }
}
  */

// Función para desconectarse de la db.
sequelize.close().then(() => {
  console.log('Conexión cerrada correctamente.');
}).catch((error) => {
  console.error('Error al cerrar la conexión', error);
});

/* async function cerrar () {
  try{
    await sequelize.close();
    console.log ('Conexión cerrada correctamente.');
  }
  catch (error){
    console.error('Error al cerrar la conexión',error);
  }
}
*/

module.exports = sequelize;
/* module.exports = {conectar, cerrar}; */