module.exports = (sequelize, Sequelize, DataTypes) => { 

const categorias = sequelize.define('categorias',{
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
	
    namecat: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
},
{
    timestamps:false
});
return categorias;

}




