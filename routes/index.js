const express = require("express");

const router = express.Router();
const employeeRoutes = require("./employeeRoutes");
const projectRoutes = require("./projectRoutes");
const designationRoutes = require("./designationRoutes");

router.use("/employees", employeeRoutes);
router.use("/projects", projectRoutes);
router.use("/designations", designationRoutes);

module.exports = router;
