import React, { useContext } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  const role = localStorage.getItem('role'); // Or fetch from user state

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">E-Gurukul</h1>
        <nav className="nav-links">
          <Link to="/student">Home</Link>
          {role === 'admin' && <Link to="/admin-dashboard">Admin</Link>}
          {role === 'teacher' && <Link to="/teacher-dashboard">Teacher</Link>}
          {role === 'user' && <Link to="/my-courses">My Courses</Link>}
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};
