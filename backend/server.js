const express = require("express");
const cors = require("cors");

const app = express();

// ✅ CORS FIX (IMPORTANT)
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend Working 🚀");
});

// routes
const departmentRoutes = require("./routes/department.routes");
const employeeRoutes = require("./routes/employee.routes");
const statsRoutes = require("./routes/stats.routes");

app.use("/api/departments", departmentRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/stats", statsRoutes);

// start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});