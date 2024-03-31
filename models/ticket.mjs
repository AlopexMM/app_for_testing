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
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    products: {
        type: DataTypes.STRING,
        allowNull: false,
        set(values) {
            let stringValues = ''
            const length = values.length
            for ( let i = 0; i < length; i++ ) {
                if(i+1 == length) {
                    stringValues += values[i]
                } else {
                    stringValues += `${values[i]};`
                }
            }
            this.setDataValue('products', stringValues)
        },
        get() {
            return this.getDataValue('products').split(';')
        }
    },
    creditCard: {
        type: DataTypes.STRING,
        allowNull: false
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

export default Ticket