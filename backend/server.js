const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const { errorHandler } = require("./app/middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", require("./app/routes/userRoutes"));
app.use("/api/customers", require("./app/routes/customerRoutes"));
app.use("/api/cases", require("./app/routes/caseRoutes"));

app.get("/", (req, res) => res.send("CRM MERN Backend running"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
