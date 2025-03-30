const { Project } = require("../models");

exports.getAllProjects = async () => {
    return await Project.findAll();
};

exports.createProject = async (project) => {
    return await Project.create(project);
};