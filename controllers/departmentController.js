const DepartmentService = require("../services/department.service");
const { buildSuccessResponse, buildFailureResponse } = require("../utils/response");

exports.getAllDepartments = async (req, res) => {
    try {
        const departments = await DepartmentService.getAllDepartments();
        res.json(buildSuccessResponse("Departments fetched successfully.", departments));
    } catch (err) {
        res.status(500).json(buildFailureResponse(err));
    }
};