// Import Model
const Project = require("../models/project");
const { buildSuccessResponse, buildFailureResponse } = require("../utils/response");

// Get all projects
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.json(buildSuccessResponse("Projects fetched successfully.", projects));
    } catch (err) {
        res.status(500).json(buildFailureResponse(err));
    }
};

// Add a new project
exports.addProject = async (req, res) => {
    const { name } = req.body;
    try {
        const project = await Project.create({ project_name: name });
        res.status(201).json(buildSuccessResponse("Project added successfully.", project));
    } catch (err) {
        res.status(500).json(buildFailureResponse(err));
    }
};
