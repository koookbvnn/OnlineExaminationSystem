import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const ManageStudents = () => {
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const addStudent = () => {
    if (studentName.trim() !== "") {
      setStudents([...students, studentName]);
      setStudentName("");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <span className="back-button" onClick={() => navigate("/admin-dashboard")}>⬅ Back</span>
        <h2>Manage Students</h2>
      </header>

      {showPopup && <div className="popup">✅ Student Added Successfully!</div>}

      <main className="dashboard-content">
        <input
          type="text"
          placeholder="Enter Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button className="dashboard-button" onClick={addStudent}>Add Student</button>

        <h3>Registered Students:</h3>
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
      </main>

      <footer className="footer">
        © 2025 Online Exam Center. All rights reserved.
      </footer>
    </div>
  );
};

export default ManageStudents;
