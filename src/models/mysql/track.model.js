import { sequelize } from '../../config/mysql.js';
import { DataTypes } from 'sequelize';

export const Track = sequelize.define(
    "track",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        albun: {
            type: DataTypes.STRING
        },
        mediaId: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.ENUM(["user", "admin"])
        }
    },
    {
        timestamps: true
    }
);