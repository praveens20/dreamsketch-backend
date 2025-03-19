require("dotenv").config();
const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("./config/config.json").development;

const app = express();
const port = process.env.PORT || 3000;

// Initialize Sequelize
const sequelize = new Sequelize({
    ...dbConfig,
    define: { schema: dbConfig.schema },
    logging: false,
    dialectOptions: {
        // ssl: process.env.PGSSLMODE === "require" ? { rejectUnauthorized: false } : false
        ssl: { rejectUnauthorized: false }
    }
});

// Import Model
const EmployeeModel = require("./models/employee")(sequelize, DataTypes);

// Middleware
app.use(express.json());
app.use(cors());  // Enable CORS

// Sync Database (Creates table if it doesn't exist)
sequelize.sync()
    .then(() => console.log("Database synced"))
    .catch(err => console.error("Error syncing database:", err));

// Get all employees
app.get("/employees", async (req, res) => {
    try {
        console.log("----------get employees------------");
        const employees = await EmployeeModel.findAll();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new employee
app.post("/employees", async (req, res) => {
    const { name, position, salary } = req.body;
    try {
        const employee = await EmployeeModel.create({ name, position, salary });
        res.status(201).json(employee);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
