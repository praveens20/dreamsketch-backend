const { Designation } = require("../models");

exports.getAllDesignations = async () => {
    return await Designation.findAll();
};