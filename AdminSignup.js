import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function AdminSignup() {
  const navigate = useNavigate(); // Hook for redirection

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/admin-login"); // Redirects to Admin Login page after signup
  };

  return (
    <div className="container">
      <main className="signup-content">
        <h2 className="signup-title">Administrator Signup</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <input type="text" placeholder="Enter your full name" required />
          <input type="text" placeholder="Enter your Employee ID" required />
          <input type="email" placeholder="Enter your email" required />
          <input type="tel" placeholder="Enter your phone number" required />

          {/* Dropdown for selecting School/College */}
          <select className="dropdown">
            <option value="">Select School/College</option>
            <option value="KL University">KL University</option>
            <option value="Indian Institute of Technology (IIT) Delhi">IIT Delhi</option>
            <option value="Indian Institute of Technology (IIT) Bombay">IIT Bombay</option>
            <option value="Indian Institute of Science (IISc) Bangalore">IISc Bangalore</option>
            <option value="National Institute of Technology (NIT) Trichy">NIT Trichy</option>
            <option value="BITS Pilani">BITS Pilani</option>
            <option value="University of Hyderabad">University of Hyderabad</option>
            <option value="Anna University">Anna University</option>
            <option value="Delhi University">Delhi University</option>
            <option value="Jadavpur University">Jadavpur University</option>
            <option value="Amity University">Amity University</option>
          </select>

          <input type="password" placeholder="Create a password" required />
          <button type="submit" className="button">Sign Up</button>
        </form>
      </main>
      <footer className="footer">© 2025 Online Exam Center. All rights reserved.</footer>
    </div>
  );
}

export default AdminSignup;
