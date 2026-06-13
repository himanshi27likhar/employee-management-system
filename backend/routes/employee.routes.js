const express = require("express");
const router = express.Router();
const pool = require("../db");

// CREATE employee
router.post("/", async (req, res) => {
  try {
    const {
      name,
      user_id,
      department_id,
      phone,
      address,
      designation,
      salary,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO employee_profiles
      (name, user_id, department_id, phone, address, designation, salary)
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      RETURNING *`,
      [
        name,
        user_id,
        department_id,
        phone,
        address,
        designation,
        salary,
      ]
    );

    res.json(result.rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error creating employee",
    });
  }
});

// GET all employees
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM employee_profiles"
    );

    res.json(result.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error fetching employees",
    });
  }
});

// GET single employee
router.get("/:id", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM employee_profiles WHERE id=$1",
      [req.params.id]
    );

    res.json(result.rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error fetching employee",
    });
  }
});

// UPDATE employee
router.put("/:id", async (req, res) => {
  try {
    const {
      name,
      phone,
      address,
      designation,
      salary,
    } = req.body;

    const result = await pool.query(
      `UPDATE employee_profiles
      SET
      name=$1,
      phone=$2,
      address=$3,
      designation=$4,
      salary=$5
      WHERE id=$6
      RETURNING *`,
      [
        name,
        phone,
        address,
        designation,
        salary,
        req.params.id,
      ]
    );

    res.json(result.rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error updating employee",
    });
  }
});

// DELETE employee
router.delete("/:id", async (req, res) => {
  try {
    await pool.query(
      "DELETE FROM employee_profiles WHERE id=$1",
      [req.params.id]
    );

    res.json({
      message:
        "Deleted successfully",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        "Error deleting employee",
    });
  }
});

module.exports = router;