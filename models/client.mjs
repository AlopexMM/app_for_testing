import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize('sqlite::memory:', { logging: false })

class Client extends Model {}

Client.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postalCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'Client',
    timestamps: false
})

export default Client