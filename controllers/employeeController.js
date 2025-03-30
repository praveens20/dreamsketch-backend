const EmployeeService = require("../services/employee.service");
const { buildSuccessResponse, buildFailureResponse } = require("../utils/response");

exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await EmployeeService.getAllEmployees();
        res.json(buildSuccessResponse("Employees fetched successfully.", employees));
    } catch (err) {
        res.status(500).json(buildFailureResponse(err));
    }
};

exports.createEmployee = async (req, res) => {
    const { name, empId } = req.body;
    try {
        const employee = await EmployeeService.createEmployee({ emp_name: name, emp_id: empId });
        res.status(201).json(buildSuccessResponse("Employee added successfully.", employee));
    } catch (err) {
        res.status(500).json(buildFailureResponse(err));
    }
};
