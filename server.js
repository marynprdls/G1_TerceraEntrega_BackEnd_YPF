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
const db = require("./src/database/models/index.js");

db.sequelize.sync().then(() => {
 // initial(); // Just use it in development, at the first time execution!. Delete it in production
});


// Ruta raiz.
app.get('/', (req, res) => {
    res.status(200).end('Bienvenid@ a la API');
});

//rutas apps
//rutas
/*



require ('./controllers/generos.js')(app);
require ('./controllers/actores.js')(app);

require ('./controllers/contenido_generos.js')(app);
*/

/* 
ENDPOINTS
///////

// 1 - Ver información de películas y series.
http://localhost:3008/api/contenido/contenidos ---->(get)
*/

const content= require ('./controllers/contenidos.js');

app.use('/api/contenido', content);

/*
2- Ver información de actrices/actores y sus trabajos fílmicos.
//llamar a controlador contenido_actores 
// Obtener todos los contenidos según actor/Actriz
//GET /api/contenido_actores/reparto/contenido
*/
const contentcast= require ('./controllers/contenido_actores.js');

app.use('/api/contenido_actores', contentcast);

/*
3- Filtrar por una película o serie específica.
// endpoint definido en controlador contenidos
// READ /api/contenido/titulo/Inception
*/


/*
4- Ver solo películas.
Ver solo series.

// endpoint definido en controlador categorias.
// READ /api/categoria/nombrecategoria/serie
// READ /api/categoria/nombrecategoria/pelicula
*/
const cat =require ('./controllers/categoria.js');
app.use('/api/categoria', cat);

/*
5- ver contenido por gener0
// llamar al controler contenido_generos
*/

//respuesta para rutas inexistentes 

app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor.
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});
