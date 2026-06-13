import { useEffect, useState } from "react";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const role = localStorage.getItem("role");

  const fetchEmployees = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/employees");
      const data = await res.json();
      setEmployees(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // CREATE
  const handleCreate = () => {
    window.location.href = "/create-employee";
  };

  // EDIT (OLD SIMPLE WORKING WAY)
  const handleEdit = async (emp) => {
    const name = prompt("Enter Name", emp.name);
    const phone = prompt("Enter Phone", emp.phone);
    const address = prompt("Enter Address", emp.address);
    const designation = prompt("Enter Designation", emp.designation);
    const salary = prompt("Enter Salary", emp.salary);

    if (!name || !phone || !address || !designation || !salary) return;

    try {
      await fetch(`http://localhost:5000/api/employees/${emp.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          address,
          designation,
          salary,
        }),
      });

      alert("Updated successfully");
      fetchEmployees();
    } catch (error) {
      console.error(error);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    const ok = window.confirm("Delete this employee?");
    if (!ok) return;

    try {
      await fetch(`http://localhost:5000/api/employees/${id}`, {
        method: "DELETE",
      });

      fetchEmployees();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "40px", background: "#f4f8fc", minHeight: "100vh" }}>
      
      {/* HEADER */}
      <div style={{
        background: "linear-gradient(to right, #1565C0, #42A5F5)",
        padding: "25px",
        borderRadius: "15px",
        color: "white",
        marginBottom: "30px"
      }}>
        <h1>Employee Management System</h1>

        {role === "admin" && (
          <button onClick={handleCreate}>
            Create Employee
          </button>
        )}
      </div>

      {/* TABLE */}
      <div style={{ background: "white", padding: "20px", borderRadius: "15px" }}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr style={{ background: "#1565C0", color: "white" }}>
              <th>Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Salary</th>
              {role === "admin" && <th>Actions</th>}
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>

                <td>
                  {emp.department_id === 1
                    ? "IT"
                    : emp.department_id === 2
                    ? "HR"
                    : emp.department_id === 3
                    ? "Finance"
                    : emp.department_id === 4
                    ? "Marketing"
                    : "Unknown"}
                </td>

                <td>{emp.designation}</td>
                <td>{emp.phone}</td>
                <td>{emp.address}</td>
                <td>₹{Number(emp.salary).toLocaleString()}</td>

                {role === "admin" && (
                  <td>
                    <button onClick={() => handleEdit(emp)}>
                      Edit
                    </button>

                    <button onClick={() => handleDelete(emp.id)}>
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;