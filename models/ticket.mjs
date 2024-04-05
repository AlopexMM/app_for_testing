import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";
import crypto, { randomUUID } from "node:crypto"

const sequelize = new Sequelize('sqlite::memory:', { logging: false })

class Ticket extends Model {}

Ticket.init({
    id: {
        type: DataTypes.UUID,
        defaulValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    products: {
        type: DataTypes.STRING,
        allowNull: false,
        set(values) {
            this.setDataValue('products', JSON.stringify(values))
        },
        get() {
            return JSON.parse(this.getDataValue('products'))
        }
    }
},{
    sequelize,
    modelName: 'Ticket',
    timestamps: false,
    hooks: {
        beforeValidate: (ticket, options) => {
            ticket.id = crypto.randomUUID()
        }
    }
})

export default Ticket