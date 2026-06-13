import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    designation: "",
    salary: "",
  });

  const fetchEmployee = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/employees/${id}`);
      const data = await res.json();

      if (data) {
        setForm({
          name: data.name || "",
          phone: data.phone || "",
          address: data.address || "",
          designation: data.designation || "",
          salary: data.salary || "",
        });
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await fetch(`http://localhost:5000/api/employees/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      alert("Updated successfully!");
      navigate("/employees");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Edit Employee</h2>

      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <br /><br />

      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
      <br /><br />

      <input name="address" value={form.address} onChange={handleChange} placeholder="Address" />
      <br /><br />

      <input name="designation" value={form.designation} onChange={handleChange} placeholder="Designation" />
      <br /><br />

      <input name="salary" value={form.salary} onChange={handleChange} placeholder="Salary" />
      <br /><br />

      <button onClick={handleUpdate}>
        Update Employee
      </button>
    </div>
  );
}

export default EditEmployee;