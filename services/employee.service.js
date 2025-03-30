const { Employee, Designation } = require("../models");

exports.getAllEmployees = async () => {
    return await Employee.findAll({
        include: [{
            model: Designation,
            as: 'designation',
            attributes: ['title'], // Get only the designation title
        }],
    });
};

exports.createEmployee = async (employee) => {
    return await Employee.create(employee);
};
