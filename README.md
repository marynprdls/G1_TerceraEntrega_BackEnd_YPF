# Pre-Entrega 3 🎯

## Diseño del Modelo de Datos

### 1. Análisis del archivo trailerflix.json:

![image](https://github.com/user-attachments/assets/8b6b790a-8f03-41f4-8a3a-5775ca97d30d)

### 2. Diseño de la base de datos:

![image](https://github.com/user-attachments/assets/9f7d7689-e1c8-4914-ab95-b4ca0cd43d85)

### 3. Herramienta de diseño: DBDesing

## Procedimiento

### 1. Preparación de los datos: Obtenido de ChatGPT

### 2. Estructura del proyecto: Se creo en node.js la estructura basica               

### 3. Configuración de la conexión a MySQL:
-  Se configuro el .env con el host , usuario y contraseña .
-  Se creo el .env.example  

### 4. Creación de modelos y endpoints:
- Creamos los enpoiunts para que cada tabla pueda ser editao,cargado,consultado,eliminado

### 5. Documentación de endpoints:
| Método | Endpoint               | Descripción                                      |
|--------|------------------------|--------------------------------------------------|
| GET    | `/api/contenido/contenidos`        |Ver información de películas y series.                |
| GET    | `/api/contenido_actores/reparto/contenido`|  Ver información de actrices/actores y sus trabajos fílmicos.     |
| GET    | `/api/contenido/titulo/:search` | Filtrar por una película o serie específica.    |
| GET    | `/api/categoria/nombrecategoria/pelicula`        | Ver solo películas.                 |
| GET    | `/api/categoria/nombrecategoria/serie`    |Ver solo series.             |
| GET    | `api/contenidosgeneros/genero`    | ver contenido por genero            |


### Endpoints 

- Actores
    - /api/reparto/ <- GET
    - /api/reparto/ <- POST
    - /api/reparto/:id <- GET
    - /api/reparto/:id <- PUT
    - /api/reparto/:id <- DELETE

- Categoria
    - /api/categoria/ <- GET
    - /api/categoria/ <- POST
    - /api/categoria/nombrecategoria/:nombrecategoria <- GET
    - /api/categoria/:id <- PUT
    - /api/categoria//:id <- DELETE


### Desarrolladoras

<div align='center'>
  
| [<img src="https://github.com/KarlaGreta.png"  width="150" height="150"><br>KarlaGreta](https://github.com/KarlaGreta) | [<img src="https://github.com/marynprdls.png"  width="150" height="150"><br>marynprdls](https://github.com/marynprdls) 
|-----------------|-----------------|
  
</div>
