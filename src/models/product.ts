import { Sequelize, DataTypes, Model, DecimalDataType } from "sequelize";

const sequelize = new Sequelize('sqlite::memory:', { logging: false })

class Product extends Model {
    declare id: number
    declare name: string
    declare brand: string
    declare image: string
    declare price: DecimalDataType
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'Product',
    timestamps: false
})

export default Product