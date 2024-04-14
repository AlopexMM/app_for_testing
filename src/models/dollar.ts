import { Sequelize, DataTypes, Model, DecimalDataType } from "sequelize";
const sequelize = new Sequelize('sqlite::memory:', { logging: false })

class Dollar extends Model {
    declare id: number
    declare date: string
    declare source: string
    declare sell: DecimalDataType
    declare buy: DecimalDataType
}

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