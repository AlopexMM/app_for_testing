import Sequelize, { DataTypes } from "sequelize";
const sequelize = new Sequelize('sqlite::memory:', { logging: false })

class Dollar extends Sequelize.Model {}

Dollar.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    source: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sell: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    buy: {

        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Dollar',
    timestamps: false
})

export default Dollar 