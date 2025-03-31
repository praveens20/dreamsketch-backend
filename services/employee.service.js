const { Employee, Designation, Department } = require("../models");

exports.getAllEmployees = async () => {
    return await Employee.findAll({
        include: [{
            model: Designation,
            as: 'designation',
            attributes: ['des_name'],
        }, {
            model: Department,
            as: 'department',
            attributes: ['dep_name']
        }],
    });
};

exports.createEmployee = async (employee) => {
    return await Employee.create(employee);
};
