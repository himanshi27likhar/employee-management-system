import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function EmployeeChart({ employees }) {
  const deptCount = {
    IT: 0,
    HR: 0,
    Finance: 0,
    Marketing: 0,
  };

  employees.forEach((emp) => {
    const dept = emp.department || "IT";
    if (deptCount[dept] !== undefined) {
      deptCount[dept]++;
    }
  });

  const data = {
    labels: Object.keys(deptCount),
    datasets: [
      {
        label: "Employees",
        data: Object.values(deptCount),
        backgroundColor: [
          "#1565C0",
          "#42A5F5",
          "#66BB6A",
          "#FFA726",
        ],
      },
    ],
  };

  return (
    <div style={{ width: "350px", margin: "20px auto" }}>
      <h2 style={{ textAlign: "center" }}>
        Department Distribution
      </h2>
      <Pie data={data} />
    </div>
  );
}

export default EmployeeChart;