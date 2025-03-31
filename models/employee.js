module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("Employee", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        emp_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emp_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Y'
        },
        designation_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'designations', // Table name
                key: 'id', // Column in Designation table
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
        },
        department_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'departments', // Table name
                key: 'id', // Column in Department table
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
        },
    }, {
        schema: 'admin',
        tableName: 'employees',
        timestamps: false
    });

    Employee.associate = (models) => {
        Employee.belongsTo(models.Designation, {
            foreignKey: "designation_id",
            as: 'designation'
        });

        Employee.belongsTo(models.Department, {
            foreignKey: "department_id",
            as: 'department'
        });
    };

    return Employee;
};

