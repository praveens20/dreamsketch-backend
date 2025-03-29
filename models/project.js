const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Project = sequelize.define("project", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    project_name: { type: DataTypes.STRING, allowNull: false, unique: true },
    client_name: { type: DataTypes.STRING },
    planned_start_date: { type: DataTypes.TIME },
    planned_end_date: { type: DataTypes.TIME },
    actual_start_date: { type: DataTypes.TIME },
    actual_end_date: { type: DataTypes.TIME },
    meta_data: { type: DataTypes.JSONB }
}, { schema: 'admin', timestamps: false });

module.exports = Project;
