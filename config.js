// ENVIRONMENT
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    PORT: process.env.PORT || "3001",
    datab:{
        DB_HOST: process.env.DB_HOST || "localhost",
        DB_USER: process.env.DB_USER ||"root",
        DB_NAME: process.env.DB_NAME ||"trailerflix",
        DB_PASSWORD: process.env.DB_PASSWORD ||"Kingramones92",
        DB_DIALECT: process.env.DB_DIALECT ||"mysql",
        DB_PORT: process.env.DB_PORT || "3306",
    }
}