// ENVIRONMENT
const dotenv = require('dotenv');
dotenv.config();




/* Establece conexion a base de datos */
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions:{options:{encrypt:true}},
    define:{timestamps:false}
  });

/* función para autenticar la conexión a la base de datos. */
async function authenticate () {
  try{
    await sequelize.authenticate();
    console.log ('Conexión a la base de datos establecida correctamente.');
  }
  catch (error){
    console.error('Error al conectar a la base de datos:',error);
  }
}
// Función para desconectarse de la db.
async function closeConnection () {
  try{
    await sequelize.close();
    console.log ('Conexión cerrada correctamente.');
  }
  catch (error){
    console.error('Error al cerrar la conexión',error);
  }
}

module.exports = {authenticate, closeConnection};