import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [stats, setStats] = useState({
    employees: 0,
    departments: 0,
    skills: 0,
    images: 0,
  });

  const fetchStats = async () => {
    const res = await fetch("http://localhost:5000/api/stats");
    const data = await res.json();
    setStats(data);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div>
      <h1>Employee Dashboard 🚀</h1>

      <div>
        <p>👨‍💼 Employees: {stats.employees}</p>
        <p>🏢 Departments: {stats.departments}</p>
        <p>🧠 Skills: {stats.skills}</p>
        <p>🖼️ Images: {stats.images}</p>
      </div>

      <br />

      <Link to="/create-employee">
        <button>Create Employee</button>
      </Link>

      <Link to="/employees">
        <button>View Employees</button>
      </Link>
    </div>
  );
}

export default Dashboard;