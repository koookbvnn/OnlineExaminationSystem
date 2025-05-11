import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInStudent");
    if (!loggedInUser) {
      navigate("/student-login"); // ✅ Redirect to login if no student is logged in
    } else {
      setStudentName(loggedInUser);
    }
  }, [navigate]);

  return (
    <div className="container">
      <header className="header">Welcome, {studentName}!</header>

      <main className="dashboard-content">
        <h2>Student Dashboard</h2>
        <p>View upcoming exams and results here.</p>
      </main>

      <footer className="footer">© 2025 Online Exam Center. All rights reserved.</footer>
    </div>
  );
};

export default StudentDashboard;
