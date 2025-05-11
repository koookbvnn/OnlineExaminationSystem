import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const CreateExam = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const addQuestion = () => {
    if (newQuestion.trim() !== "") {
      setQuestions([...questions, newQuestion]);
      setNewQuestion("");
    }
  };

  const saveExam = () => {
    setShowPopup(true); // ✅ Show Popup on Save
    setTimeout(() => {
      setShowPopup(false);
      navigate("/admin-dashboard"); // ✅ Redirect after popup disappears
    }, 2000);
  };

  return (
    <div className="container">
      <header className="header">
        <span className="back-button" onClick={() => navigate("/admin-dashboard")}>⬅ Back</span>
        <h2>Create an Exam</h2>
      </header>

      {showPopup && <div className="popup">✅ Exam Created Successfully!</div>} {/* ✅ Popup */}

      <main className="dashboard-content">
        <input type="text" placeholder="Exam Title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <input type="text" placeholder="Enter Question" value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} />
        <button onClick={addQuestion}>Add Question</button>

        <ul>
          {questions.map((q, index) => (
            <li key={index}>{q}</li>
          ))}
        </ul>

        <button className="dashboard-button" onClick={saveExam}>Save Exam</button>
      </main>

      <footer className="footer">
        © 2025 Online Exam Center. All rights reserved.
      </footer>
    </div>
  );
};

export default CreateExam;
