import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    localStorage.setItem("user", "test");
    navigate("/employee");
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <input placeholder="Email" />
      <input placeholder="Password" />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;