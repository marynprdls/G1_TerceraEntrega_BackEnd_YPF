module.exports = (sequelize, Sequelize, DataTypes) => { 
const generos = sequelize.define ('generos',{
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
	
    namegender: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

});

return generos;

}
 