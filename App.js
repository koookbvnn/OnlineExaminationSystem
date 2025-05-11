import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import StudentLogin from './StudentLogin';
import AdminLogin from './AdminLogin';
import StudentSignup from './StudentSignup'; 
import AdminSignup from './AdminSignup'; 
import StudentDashboard from "./StudentDashboard"; 
import AdminDashboard from "./AdminDashboard"; // ✅ Removed duplicate `AdminLogin` import
import CreateExam from "./CreateExam"; // ✅ Import each page component
import ScheduleExam from "./ScheduleExam";
import ManageStudents from "./ManageStudents";
import ResultsAnalysis from "./ResultsAnalysis";


function Home() {
  return (
    <div className="container">
      <header className="header">
        <span className="header-icons">⏰ 🌐</span>
      </header>
      <main className="main-content">
        <h1 className="welcome-text">WELCOME</h1>
        <h2 className="site-title">Online Examination System</h2>
        <Link to="/student-login">
          <button className="button">Student</button>
        </Link>
        <Link to="/admin-login">
          <button className="button">Administrator</button>
        </Link>
      </main>
      <footer className="footer">© 2025 Online Exam Center. All rights reserved.</footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-signup" element={<StudentSignup />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
         <Route path="/create-exam" element={<CreateExam />} />
                 <Route path="/schedule-exam" element={<ScheduleExam />} /> {/* ✅ Route added */}
                         <Route path="/manage-students" element={<ManageStudents />} /> {/* ✅ Route added */}
                                 <Route path="/results-analysis" element={<ResultsAnalysis />} /> {/* ✅ Route added */}
      </Routes>
    </Router>
  );
}

export default App;
