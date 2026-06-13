import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";
import EditEmployee from "./pages/EditEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth pages */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard */}
        <Route path="/employee" element={<Dashboard />} />

        {/* Employee features */}
        <Route path="/create-employee" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/edit-employee/:id" element={<EditEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;