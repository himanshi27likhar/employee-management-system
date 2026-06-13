import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = () => {
  if (!email || !password) {
    alert("Enter email & password");
    return;
  }

  // Admin Login
  if (
    email === "himanshi.likhar.8@gmail.com" &&
    password === "1234"
  ) {
    localStorage.setItem("role", "admin");
  } else {
    localStorage.setItem("role", "employee");
  }

  // Save logged in user
  localStorage.setItem("user", email);

  // Go to employee page
  navigate("/employee");
};

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #1565C0, #42A5F5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "20px",
          width: "400px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#1565C0",
            marginBottom: "10px",
          }}
        >
          Employee Management
        </h1>

        <p
          style={{
            color: "gray",
            marginBottom: "30px",
          }}
        >
          Sign in to continue
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button
          onClick={handleLogin}
          style={styles.button}
        >
          Login
        </button>

        <p style={{ marginTop: "20px" }}>
          New user?{" "}
          <Link
            to="/signup"
            style={{
              color: "#1565C0",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#1565C0",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Login;