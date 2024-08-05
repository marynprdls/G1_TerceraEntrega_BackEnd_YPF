// Servidor. 
const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config/config.js'); // Ref app listen

const app = express();

//sincronizacion modelos
const catmod=require ('./src/database/models/categorias.model.js');
const contmod=require('./src/database/models/contenido_actores.model.js');
const contgen =require ('./src/database/models/contenido_generos.model.js');

//rutas
const ContenidosRouter =require ('./controllers/contenidos.js');
const CategoriasRouter = require ('./controllers/categoria.js');
const GenerosRouter = require ('./controllers/generos.js');
const ActoresRouter = require ('./controllers/actores.js');
const ContenidoActoresRouter = require ('./controllers/contenido_actores.js');
const ContenidoGenerosRouter = require ('./controllers/contenido_generos.js');

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = config.PORT;


// Middleware.
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    next();
})

// Ruta raiz.
app.get('/', (req, res) => {
    res.status(200).end('Bienvenid@ a la API');
});

//rutas apps

//Ruta a controlador de contenidos
app.use(ContenidosRouter);
//Ruta a controlador de categorias
app.use(CategoriasRouter);
//Ruta a controlador de generos
app.use(GenerosRouter);
//Ruta a controlador de actores
app.use(ActoresRouter);
//Ruta a controlador de contenido_actores
app.use(ContenidoActoresRouter);
//Ruta a controlador de contenido_generos
app.use(ContenidoGenerosRouter);


//respuesta para rutas inexistentes 

app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor.
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});
