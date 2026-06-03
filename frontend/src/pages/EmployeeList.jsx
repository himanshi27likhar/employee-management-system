import { useEffect, useState } from "react";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await fetch("http://localhost:5000/api/employees");
    const data = await res.json();
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employee List</h1>

      {employees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        employees.map((emp) => (
          <div key={emp.id} style={{ border: "1px solid black", margin: 10, padding: 10 }}>
            <p>📞 Phone: {emp.phone}</p>
            <p>📍 Address: {emp.address}</p>
            <p>💼 Designation: {emp.designation}</p>
            <p>💰 Salary: {emp.salary}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default EmployeeList;