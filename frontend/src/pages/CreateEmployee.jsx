import { useState } from "react";

function CreateEmployee() {
  const [form, setForm] = useState({
    phone: "",
    address: "",
    designation: "",
    salary: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const data = {
      user_id: 1,
      department_id: 1,
      ...form
    };

    await fetch("http://localhost:5000/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    alert("Employee Added 🚀");
  };

  return (
    <div>
      <h1>Create Employee</h1>

      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <br />

      <input name="address" placeholder="Address" onChange={handleChange} />
      <br />

      <input name="designation" placeholder="Designation" onChange={handleChange} />
      <br />

      <input name="salary" placeholder="Salary" onChange={handleChange} />
      <br />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default CreateEmployee;