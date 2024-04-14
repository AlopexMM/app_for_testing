import { Sequelize, DataTypes, Model, UUIDV4, CreationOptional } from "sequelize";
import crypto, { UUID, randomUUID } from "node:crypto"

const sequelize = new Sequelize('sqlite::memory:', { logging: false })

class Ticket extends Model {
    declare id: CreationOptional<UUID>
    declare clientId: number
    declare products: string
}

Ticket.init({
    id: {
        type: DataTypes.UUID,
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