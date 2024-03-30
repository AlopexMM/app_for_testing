import { Sequelize, DataTypes, Model } from "sequelize";
import Client from "./client.mjs";
import Product from "./product.mjs";

const sequelize = new Sequelize('sqlite::memory:')

class Ticket extends Model {}

Ticket.init({
    id: {
        type: DataTypes.UUID,
        defaulValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    creditCard: {
        type: DataTypes.STRING,
        allowNull: true
    },
    paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'Ticket',
    timestamps: false
})

Ticket.belongsTo(Client)
Ticket.hasMany(Product)

export default Ticket