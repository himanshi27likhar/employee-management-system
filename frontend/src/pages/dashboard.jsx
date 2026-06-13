import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
  const [employeeCount, setEmployeeCount] =
    useState(0);

  const fetchEmployees = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/employees"
      );
      const data = await res.json();
      setEmployeeCount(data.length);
    } catch (error) {
      console.error(
        "Error fetching employees:",
        error
      );
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#eef4fb",
        padding: "40px",
      }}
    >
      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(to right, #1565C0, #42A5F5)",
          borderRadius: "20px",
          padding: "35px",
          color: "white",
          marginBottom: "35px",
          boxShadow:
            "0 8px 20px rgba(0,0,0,0.12)",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "36px",
          }}
        >
          Employee Dashboard 🚀
        </h1>

        <p
          style={{
            marginTop: "10px",
            fontSize: "18px",
            opacity: 0.9,
          }}
        >
          Manage employees, departments,
          and records professionally
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "25px",
          marginBottom: "45px",
        }}
      >
        <div style={styles.card}>
          <h3> Employees</h3>
          <p style={styles.number}>
            {employeeCount}
          </p>
        </div>

        <div style={styles.card}>
          <h3>Departments</h3>
          <p style={styles.number}>4</p>
        </div>

        <div style={styles.card}>
          <h3> Skills</h3>
          <p style={styles.number}>5</p>
        </div>

        <div style={styles.card}>
          <h3> Images</h3>
          <p style={styles.number}>0</p>
        </div>
      </div>

      {/* Action Section */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "35px",
          textAlign: "center",
          boxShadow:
            "0 4px 15px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            color: "#1565C0",
            marginBottom: "10px",
          }}
        >
          Quick Actions
        </h2>

        <p
          style={{
            color: "gray",
            marginBottom: "25px",
          }}
        >
          Manage employee records quickly
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link to="/create-employee">
            <button style={styles.button}>
              + Create Employee
            </button>
          </Link>

          <Link to="/employees">
            <button style={styles.button}>
              View Employees
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "30px",
    textAlign: "center",
    boxShadow:
      "0 4px 14px rgba(0,0,0,0.08)",
  },

  number: {
    fontSize: "38px",
    fontWeight: "bold",
    color: "#1565C0",
    marginTop: "10px",
  },

  button: {
    backgroundColor: "#1565C0",
    color: "white",
    border: "none",
    padding: "15px 28px",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Dashboard;