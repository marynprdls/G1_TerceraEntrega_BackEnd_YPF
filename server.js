// Servidor. 
const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config.js'); // Ref app listen

const app = express();


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = config.PORT;

// database
const db = require("./src/connect.js");

db.sequelize.sync().then(() => {
 // initial(); // Just use it in development, at the first time execution!. Delete it in production
});


// Ruta raiz.
app.get('/', (req, res) => {
    res.status(200).end('Bienvenid@ a la API');
});

//rutas apps
//rutas
require ('./controllers/contenidos.js')(app);
require ('./controllers/categoria.js')(app);
require ('./controllers/generos.js')(app);
require ('./controllers/actores.js')(app);
require ('./controllers/contenido_actores.js')(app);
require ('./controllers/contenido_generos.js')(app);




//respuesta para rutas inexistentes 

app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor.
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});
