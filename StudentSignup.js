import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function StudentSignup() {
  const [student, setStudent] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    schoolCollege: "",
    password: "",
  });

  const navigate = useNavigate(); // Hook for redirection

const handleSignup = async (e) => {
  e.preventDefault();

  const studentData = {
    fullName: document.querySelector("input[placeholder='Enter your full name']").value,
    email: document.querySelector("input[placeholder='Enter your email']").value,
    phone: document.querySelector("input[placeholder='Enter your phone number']").value,
    dob: document.querySelector("input[type='date']").value,
    schoolCollege: document.querySelector(".dropdown").value,
    password: document.querySelector("input[placeholder='Create a password']").value,
  };

  const response = await fetch("http://localhost:8080/students/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(studentData),
  });

  if (response.ok) {
    alert("Signup Successful! Redirecting to login...");
    navigate("/student-login");
  } else {
    alert("Signup Failed");
  }
};


  return (
    <div className="container">
      <main className="signup-content">
        <h2 className="signup-title">Student Signup</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <input 
            type="text" 
            placeholder="Enter your full name" 
            value={student.fullName} 
            onChange={(e) => setStudent({ ...student, fullName: e.target.value })} 
            required 
          />
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={student.email} 
            onChange={(e) => setStudent({ ...student, email: e.target.value })} 
            required 
          />
          <input 
            type="tel" 
            placeholder="Enter your phone number" 
            value={student.phone} 
            onChange={(e) => setStudent({ ...student, phone: e.target.value })} 
            required 
          />
          <input 
            type="date" 
            value={student.dob} 
            onChange={(e) => setStudent({ ...student, dob: e.target.value })} 
            required 
          />

          {/* Dropdown for selecting School/College */}
          <select 
            className="dropdown" 
            value={student.schoolCollege} 
            onChange={(e) => setStudent({ ...student, schoolCollege: e.target.value })} 
            required
          >
            <option value="">Select School/College</option>
            <option value="KL University">KL University</option>
            <option value="IIT Delhi">IIT Delhi</option>
            <option value="IIT Bombay">IIT Bombay</option>
            <option value="IISc Bangalore">IISc Bangalore</option>
            <option value="NIT Trichy">NIT Trichy</option>
            <option value="BITS Pilani">BITS Pilani</option>
            <option value="University of Hyderabad">University of Hyderabad</option>
            <option value="Anna University">Anna University</option>
            <option value="Delhi University">Delhi University</option>
            <option value="Jadavpur University">Jadavpur University</option>
            <option value="Amity University">Amity University</option>
          </select>

          <input 
            type="password" 
            placeholder="Create a password" 
            value={student.password} 
            onChange={(e) => setStudent({ ...student, password: e.target.value })} 
            required 
          />
          <button type="submit" className="button">Sign Up</button>
        </form>
      </main>
      <footer className="footer">© 2025 Online Exam Center. All rights reserved.</footer>
    </div>
  );
}

export default StudentSignup;
