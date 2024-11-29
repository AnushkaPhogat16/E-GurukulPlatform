import React from "react";
import { useNavigate } from "react-router-dom";
import "./studentHome.css";

const StudentHome = () => {
  const navigate = useNavigate();

  const features = [
    { label: "Take MCQ Test", icon: "📚", link: "/student/test-app" },
    { label: "Check Performance Report", icon: "📊", link: "/performance-report" },
    { label: "Ask Doubts", icon: "❓", link: "/ask-doubts" },
    { label: "Check Attendance", icon: "✔️", link: "/attendance" },
    { label: "Attend Lecture", icon: "🎥", link: "/student/join-class" },
  ];

  return (
    <div className="student-dashboard">
      <h1 className="dashboard-title">Welcome, Student!</h1>
      <p className="dashboard-subtitle">Your learning journey starts here.</p>
      <div className="feature-container">
        {features.map((feature, index) => (
          <div
            className="feature-card"
            key={index}
            onClick={() => navigate(feature.link)}
          >
            <div className="feature-icon">{feature.icon}</div>
            <p className="feature-label">{feature.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentHome;
