import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const ScheduleExam = () => {
  const navigate = useNavigate();
  const [examTitle, setExamTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [scheduledExams, setScheduledExams] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const scheduleExam = () => {
    if (examTitle && date && time && duration) {
      const newExam = { examTitle, date, time, duration };
      setScheduledExams([...scheduledExams, newExam]);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <span className="back-button" onClick={() => navigate("/admin-dashboard")}>⬅ Back</span>
        <h2>Schedule an Exam</h2>
      </header>

      {showPopup && <div className="popup">✅ Exam Scheduled Successfully!</div>}

      <main className="dashboard-content">
        <input type="text" placeholder="Exam Title" value={examTitle} onChange={(e) => setExamTitle(e.target.value)} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        <input type="number" placeholder="Duration (minutes)" value={duration} onChange={(e) => setDuration(e.target.value)} />
        <button className="dashboard-button" onClick={scheduleExam}>Schedule Exam</button>

        <h3>Scheduled Exams:</h3>
        <ul>
          {scheduledExams.map((exam, index) => (
            <li key={index}>{exam.examTitle} - {exam.date} at {exam.time}, Duration: {exam.duration} mins</li>
          ))}
        </ul>
      </main>

      <footer className="footer">
        © 2025 Online Exam Center. All rights reserved.
      </footer>
    </div>
  );
};

export default ScheduleExam;
