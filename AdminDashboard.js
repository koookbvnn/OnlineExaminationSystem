import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleSignOut = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate("/admin-login");
    }, 1500);
  };

  return (
    <div className="container">
      <header className="header">
        <span className="signout-button" onClick={handleSignOut}>🔒 Sign Out</span>
      </header>

      {showPopup && <div className="popup">Successfully Logged Out</div>}

      <main className="dashboard-content">
        <h2 className="dashboard-title">Admin Dashboard</h2>

        {/* ✅ Navigate to respective pages when clicked */}
        <button className="dashboard-button" onClick={() => navigate("/create-exam")}>Create an Exam</button>
        <button className="dashboard-button" onClick={() => navigate("/schedule-exam")}>Schedule an Exam</button>
        <button className="dashboard-button" onClick={() => navigate("/manage-students")}>Manage Students</button>
        <button className="dashboard-button" onClick={() => navigate("/results-analysis")}>Results & Analysis</button>
      </main>

      <footer className="footer">
        © 2025 Online Exam Center. All rights reserved.
      </footer>
    </div>
  );
};

export default AdminDashboard;
