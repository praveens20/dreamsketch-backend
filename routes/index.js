const express = require("express");

const router = express.Router();
const employeeRoutes = require("./employeeRoutes");
const projectRoutes = require("./projectRoutes");
const designationRoutes = require("./designationRoutes");
const departmentRoutes = require("./departmentRoutes");

router.use("/employees", employeeRoutes);
router.use("/projects", projectRoutes);
router.use("/designations", designationRoutes);
router.use("/departments", departmentRoutes);

module.exports = router;
