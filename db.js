const { Sequelize } = require("sequelize");
const dbConfig = require("./config/config.json").development;

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
module.exports = sequelize;
