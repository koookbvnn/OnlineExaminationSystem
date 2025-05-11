import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Allowed students with the password "123"
  const storedCredentials = {
    "Ujwala": "123",
    "Bhanu": "123",
    "Nidhi": "123"
  };

  const handleLogin = () => {
    if (storedCredentials[username] && storedCredentials[username] === password) {
      localStorage.setItem("loggedInStudent", username);
      navigate("/student-dashboard"); // ✅ Redirect on success
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="container">
      <header className="header">Student Login</header>

  <main className="login-content">
  <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
  <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
  <button className="login-button" onClick={handleLogin}>Login</button>
          <button className="home-button" onClick={() => navigate("/")}>🏠 Back to Home</button> {/* ✅ Back Button */}
</main>
 

      <footer className="footer">© 2025 Online Exam Center. All rights reserved.</footer>
    </div>

  

  );
};

export default StudentLogin;
