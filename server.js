require("dotenv").config();
const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const sequelize = require("./db"); // Import Sequelize instance

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());  // Enable CORS

app.use("/", routes);

// Sync Database (Creates table if it doesn't exist)
sequelize.sync()
    .then(() => console.log("Database synced"))
    .catch(err => console.error("Error syncing database:", err));

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
