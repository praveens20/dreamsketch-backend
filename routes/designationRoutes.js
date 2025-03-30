const express = require("express");
const { getAllDesignations } = require("../controllers/designationController");

const router = express.Router();

router.get("/", getAllDesignations);

module.exports = router;
