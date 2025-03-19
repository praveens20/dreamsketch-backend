// Import Model
const Employee = require("../models/employee");

// Get all employees
exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a new employee
exports.addEmployee = async (req, res) => {
    const { name, position, salary } = req.body;
    try {
        const employee = await Employee.create({ name, position, salary });
        res.status(201).json(employee);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
