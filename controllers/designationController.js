const DesignationService = require("../services/designation.service");
const { buildSuccessResponse, buildFailureResponse } = require("../utils/response");

exports.getAllDesignations = async (req, res) => {
    try {
        const designations = await DesignationService.getAllDesignations();
        res.json(buildSuccessResponse("Designations fetched successfully.", designations));
    } catch (err) {
        res.status(500).json(buildFailureResponse(err));
    }
};