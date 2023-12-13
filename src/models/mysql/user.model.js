import { sequelize } from '../../config/mysql.js';
import { DataTypes  } from 'sequelize';

export const User = sequelize.define(
    "user",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.NUMBER
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.ENUM(["user","admin"])
        }
    },
    {
        timestamps: true
    }
);