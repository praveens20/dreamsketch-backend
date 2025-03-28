const express = require("express");

const router = express.Router();
const employeeRoutes = require("./employeeRoutes");
const projectRoutes = require("./projectRoutes");

router.use("/employees", employeeRoutes);
router.use("/projects", projectRoutes);

module.exports = router;
