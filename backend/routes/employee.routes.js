const express = require("express");
const router = express.Router();
const pool = require("../db");

// CREATE employee
router.post("/", async (req, res) => {
  const { user_id, department_id, phone, address, designation, salary } = req.body;

  const result = await pool.query(
    `INSERT INTO employee_profiles 
    (user_id, department_id, phone, address, designation, salary)
    VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
    [user_id, department_id, phone, address, designation, salary]
  );

  res.json(result.rows[0]);
});

// GET all employees
router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM employee_profiles");
  res.json(result.rows);
});

// GET single employee
router.get("/:id", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM employee_profiles WHERE id=$1",
    [req.params.id]
  );

  res.json(result.rows[0]);
});

// UPDATE employee
router.put("/:id", async (req, res) => {
  const { phone, address, designation, salary } = req.body;

  const result = await pool.query(
    `UPDATE employee_profiles 
     SET phone=$1, address=$2, designation=$3, salary=$4
     WHERE id=$5 RETURNING *`,
    [phone, address, designation, salary, req.params.id]
  );

  res.json(result.rows[0]);
});

// DELETE employee
router.delete("/:id", async (req, res) => {
  await pool.query("DELETE FROM employee_profiles WHERE id=$1", [
    req.params.id,
  ]);

  res.json({ message: "Deleted successfully" });
});

module.exports = router;