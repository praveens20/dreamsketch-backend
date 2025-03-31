const { Department } = require("../models");

exports.getAllDepartments = async () => {
    return await Department.findAll();
};