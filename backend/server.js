require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
};

app.use(cors(corsOptions));
app.options("/{*path}", cors(corsOptions)); 
app.use(express.json());

connectDB();

const authRoutes = require("./src/routes/auth.routes");

app.use("/tasks", require("./src/routes/task.routes"));
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Task Portal API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ✅`);
});