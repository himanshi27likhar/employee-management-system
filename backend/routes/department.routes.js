const express = require("express");
const router = express.Router();
const pool = require("../db");

// GET departments
router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM departments");
  res.json(result.rows);
});

// POST department
router.post("/", async (req, res) => {
  const { department_name } = req.body;

  const result = await pool.query(
    "INSERT INTO departments (department_name) VALUES ($1) RETURNING *",
    [department_name]
  );

  res.json(result.rows[0]);
});

module.exports = router;