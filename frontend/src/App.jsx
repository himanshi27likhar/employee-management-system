import EditEmployee from "./pages/EditEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/signin";
import Dashboard from "./pages/Dashboard";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";
import Dashboard from "./pages/Dashboard";
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

      </Routes>
    </BrowserRouter>
  );
}

export default App;