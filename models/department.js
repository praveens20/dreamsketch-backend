module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define("Department", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dep_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    }, {
        schema: 'admin',
        tableName: 'departments',
        timestamps: false
    });

    Department.associate = (models) => {
        Department.hasMany(models.Employee, { foreignKey: 'department_id' });
    };

    return Department;
};
