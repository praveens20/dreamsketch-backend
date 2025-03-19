const express = require("express");
const { getEmployees, addEmployee } = require("../controllers/employeeController");

const router = express.Router();

router.get("/", getEmployees);   // GET /employees
router.post("/", addEmployee);   // POST /employees

module.exports = router;
