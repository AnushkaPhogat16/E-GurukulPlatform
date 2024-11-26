import React from "react";
import "./adminHome.css";

const AdminHome = () => {
  const features = [
    { label: "Grade Tests", icon: "📝", link: "/grade-tests" },
    { label: "Check Attendance", icon: "📋", link: "/check-attendance" },
    { label: "Host Class", icon: "📡", link: "/host-class" },
  ];

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Welcome, Admin!</h1>
      <p className="dashboard-subtitle">Manage your tasks efficiently here.</p>
      <div className="feature-container">
        {features.map((feature, index) => (
          <div
            className="feature-card"
            key={index}
            onClick={() => (window.location.href = feature.link)}
          >
            <div className="feature-icon">{feature.icon}</div>
            <p className="feature-label">{feature.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
