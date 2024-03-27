import Sequelize, { DataTypes } from "sequelize";
const sequelize = new Sequelize('sqlite::memory:')

class Dollar extends Sequelize.Model {}

Dollar.init({
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    source: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sell: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    buy: {

        type: DataTypes.DECIMAL,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Dollar'

})

export default Dollar 