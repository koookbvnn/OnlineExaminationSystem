import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const ResultsAnalysis = () => {
  const navigate = useNavigate();
 const [results] = useState([
  { name: "Alice", score: 85 },
  { name: "Bob", score: 78 },
  { name: "Charlie", score: 92 },
]);

  const [showPopup, setShowPopup] = useState(false);

  const downloadReport = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="container">
      <header className="header">
        <span className="back-button" onClick={() => navigate("/admin-dashboard")}>⬅ Back</span>
        <h2>Results & Analysis</h2>
      </header>

      {showPopup && <div className="popup">✅ Report Downloaded Successfully!</div>}

      <main className="dashboard-content">
        <h3>Student Scores:</h3>
        <ul>
          {results.map((student, index) => (
            <li key={index}>{student.name} - Score: {student.score}%</li>
          ))}
        </ul>

        <button className="dashboard-button" onClick={downloadReport}>Download Report</button>
      </main>

      <footer className="footer">
        © 2025 Online Exam Center. All rights reserved.
      </footer>
    </div>
  );
};

export default ResultsAnalysis;
