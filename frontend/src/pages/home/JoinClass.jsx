import React, { useEffect, useState } from "react";

import "./joinClass.css";

const JoinClass = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const savedClasses = JSON.parse(localStorage.getItem("classes")) || [];
    setClasses(savedClasses);
  }, []);

  return (
    <div className="join-class-container">
      <h1>Join a Class</h1>
      {classes.length === 0 ? (
        <p>No classes available. Please check back later!</p>
      ) : (
        <ul className="class-list">
          {classes.map((classItem, index) => (
            <li key={index} className="class-item">
              <span>{classItem.subject}</span>
              <a href={classItem.link} target="_blank" rel="noopener noreferrer">
                Join Class
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JoinClass;
