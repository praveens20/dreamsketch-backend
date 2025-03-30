module.exports = (sequelize, DataTypes) => {
    const Designation = sequelize.define("Designation", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    }, {
        schema: 'admin',
        tableName: 'designations',
        timestamps: false
    });

    Designation.associate = (models) => {
        Designation.hasMany(models.Employee, { foreignKey: 'designation_id' });
    };

    return Designation;
};
