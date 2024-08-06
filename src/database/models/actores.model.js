module.exports = (sequelize, Sequelize, DataTypes) => {

const actores = sequelize.define ('actores',{
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
	
    nameact: {
        type: DataTypes.STRING (100),
        unique: true,
        allowNull: false
    },

},{
    timestamps: false
});


return actores;

}
