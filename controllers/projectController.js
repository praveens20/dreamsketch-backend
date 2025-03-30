const ProjectService = require("../services/project.service");
const { buildSuccessResponse, buildFailureResponse } = require("../utils/response");

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await ProjectService.getAllProjects();
        res.json(buildSuccessResponse("Projects fetched successfully.", projects));
    } catch (err) {
        res.status(500).json(buildFailureResponse(err));
    }
};

exports.createProject = async (req, res) => {
    const { name } = req.body;
    try {
        const project = await ProjectService.createProject({ project_name: name });
        res.status(201).json(buildSuccessResponse("Project added successfully.", project));
    } catch (err) {
        res.status(500).json(buildFailureResponse(err));
    }
};
