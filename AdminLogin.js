import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const validAdmin = {
  adminId: "7648",
  username: "ujwala",
  password: "123",
};

function AdminLogin() {
  const [adminId, setAdminId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Check credentials against stored user
    if (
      adminId === validAdmin.adminId &&
      username === validAdmin.username &&
      password === validAdmin.password
    ) {
      alert("Login Successful!");
      navigate("/admin-dashboard"); // ✅ Redirect to Admin Dashboard
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      <main className="login-content">
        <h2 className="login-title">Administrator Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Admin ID"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="button" type="submit">Login</button>
                  <button className="home-button" onClick={() => navigate("/")}>🏠 Back to Home</button> {/* ✅ Back Button */}
        </form>
      </main>
      <footer className="footer">© 2025 Online Exam Center. All rights reserved.</footer>
    </div>
  );
}

export default AdminLogin;
