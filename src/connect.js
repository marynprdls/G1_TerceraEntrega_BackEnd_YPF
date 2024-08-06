

/* Establece conexion a base de datos */
const { Sequelize } = require('sequelize');
// conexión con info de base de datos
const {datab}= require ('../config.js');

const sequelize = new Sequelize(datab.DB_NAME, datab.DB_USER, datab.DB_PASSWORD, {
    host: datab.DB_HOST,
    port: datab.DB_PORT,
    dialect: datab.DB_DIALECT
  });

/* función para autenticar la conexión a la base de datos. */

sequelize.authenticate().then(() => {
  console.log('Conexión a la base de datos establecida correctamente.');
}).catch((error) => {
  console.error('Error al conectar a la base de datos:', error);
});


// Función para desconectarse de la db.

sequelize.close().then(() => {
  console.log('Conexión cerrada correctamente.');
}).catch((error) => {
  console.error('Error al cerrar la conexión', error);
});


module.exports = sequelize;
