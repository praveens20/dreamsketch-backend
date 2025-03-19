// models/employee.js
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("employee", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        emp_name: { type: DataTypes.STRING, allowNull: false },
        emp_id: { type: DataTypes.STRING, allowNull: false },
    }, { schema: 'admin', timestamps: false });

    return Employee;
};
