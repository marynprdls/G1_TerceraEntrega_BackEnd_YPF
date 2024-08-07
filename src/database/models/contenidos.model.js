module.exports = (sequelize, Sequelize, DataTypes) => {  

    const Contenido = sequelize.define( "contenidos",
    { 
        id: {
             type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 
        
        poster: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        
        titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
        },
        
        resumen: {
        type: DataTypes.STRING,
        allowNull: false
        },
        temporadas: {
        type: DataTypes.INTEGER,
        allowNull: true
        },
        trailer: {
        type: DataTypes.STRING(255),
        //allowNull: false
        }
    },
    { 
        timestamps: false,
        underscored: true,
    }

);
return Contenido;

}

