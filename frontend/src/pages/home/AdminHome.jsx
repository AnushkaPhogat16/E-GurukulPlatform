import React from "react";
import { Link } from "react-router-dom"; // Using Link for better routing
import "./adminHome.css";
import { useNavigate } from 'react-router-dom';
const AdminHome = () => {
  const features = [
    { label: "Grade Tests", icon: "📝", link: "/grade-tests" },
    { label: "Check Attendance", icon: "📋", link: "/check-attendance" },
    { label: "Host Class", icon: "📡", link: "/admin/host-class" },
  ];
  const navigate = useNavigate();
  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Welcome, Admin!</h1>
      <p className="dashboard-subtitle">Manage your tasks efficiently here.</p>

      <div className="feature-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            {/* Use Link for navigation */}
            <Link to={feature.link} className="feature-link">
              <div className="feature-icon">{feature.icon}</div>
              <p className="feature-label">{feature.label}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
