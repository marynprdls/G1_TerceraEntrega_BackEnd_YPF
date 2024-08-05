

/* Establece conexion a base de datos */
const { Sequelize } = require('sequelize');
// conexión con info de base de datos
const {db}= require ('../config/config.js');

const sequelize = new Sequelize(db.DB_NAME,db.DB_USER,db.DB_PASSWORD, {
    host: db.DB_HOST,
    port: db.DB_PORT,
    dialect: db.DB_DIALECT
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
/*
sequelize.close().then(() => {
  console.log('Conexión cerrada correctamente.');
}).catch((error) => {
  console.error('Error al cerrar la conexión', error);
});
*/

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