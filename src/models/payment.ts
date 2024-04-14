import { UUID } from "node:crypto";
import { Sequelize, DataTypes, Model, CreationOptional } from "sequelize";

const sequelize = new Sequelize('sqlite::memory:', { logging: false })

class Payment extends Model {
    declare id: number
    declare tickerId: CreationOptional<UUID>
    declare creditCardNumber: string
    declare creditCardName: string
}

Payment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ticketId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    creditCardNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    creditCardName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'Payment'
})

export default Payment