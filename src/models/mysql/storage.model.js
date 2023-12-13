import { sequelize } from '../../config/mysql.js';
import { DataTypes } from 'sequelize';

export const Storage = sequelize.define(
    "storages",
    {
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filename: {
            type: DataTypes.NUMBER
        }
    },
    {
        timestamps: true
    }
)