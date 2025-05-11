import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // ✅ Uses existing styling

const AdminSidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/sections">Sections</Link></li>
        <li><Link to="/subjects">Subjects</Link></li>
        <li><Link to="/schedule-exam">Schedule an Exam</Link></li>
        <li><Link to="/results-analysis">Results & Analysis</Link></li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
