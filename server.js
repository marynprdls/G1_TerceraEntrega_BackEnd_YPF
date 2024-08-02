/* Extraccion de los modelos */
const db = require("./database/models/index");
/* inicializa y sincroniza la base de datos */
db.sequelize.sync().then( () => {
    initial(); // primera ejecucion, elimina lo que hay, y establece nuevos modelos
});

// creacion de primer registro

function initial (){
    db.contenidos.create({id: 11, poster:"./posters/11.jpg", titulo:"The Big Bang Theory", categoria: 1, 
        resumen: "Leonard y Sheldon son dos físicos que comparten trabajo y apartamento. La Serie comienza con la mudanza de Penny, su nueva y atractiva vecina, y hace hincapié en la dificultad de los físicos para relacionarse con personas fuera de su entorno para dar lugar a situaciones cómicas.", 
        temporadas: 12, trailer: "https://www.youtube.com/embed/WBb3fojgW0Q"});
    db.categorias.create({categoriaId: 3, namecat: "documental"});
    console.log("Base de datos sincronizada, y datos iniciales insertados");
}