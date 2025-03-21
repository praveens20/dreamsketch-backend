// Import Model
const Employee = require("../models/employee");
const { buildSuccessResponse, buildFailureResponse } = require("../utils/response");

// Get all employees
exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.json(buildSuccessResponse("Employees fetched successfully.", employees));
    } catch (err) {
        res.status(500).json(buildFailureResponse(err));
    }
};

// Add a new employee
exports.addEmployee = async (req, res) => {
    const { name, empId } = req.body;
    try {
        const employee = await Employee.create({ emp_name: name, emp_id: empId });
        res.status(201).json(buildSuccessResponse("Employee added successfully.", employee));
    } catch (err) {
        res.status(500).json(buildFailureResponse(err));
    }
};
