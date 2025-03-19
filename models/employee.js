const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Employee = sequelize.define("employee", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    emp_name: { type: DataTypes.STRING, allowNull: false },
    emp_id: { type: DataTypes.STRING, allowNull: false },
}, { schema: 'admin', timestamps: false });

module.exports = Employee;
