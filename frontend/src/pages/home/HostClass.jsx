import React, { useState } from "react";
import axios from "axios";
import "./hostClass.css";

const HostClass = () => {
  const [subject, setSubject] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subject || !link) {
      alert("Please fill in both fields!");
      return;
    }

    const newClass = { subject, link };
    const existingClasses = JSON.parse(localStorage.getItem("classes")) || [];
    localStorage.setItem("classes", JSON.stringify([...existingClasses, newClass]));

    alert("Class hosted successfully!");
    setSubject("");
    setLink("");
  };

  return (
    <div className="host-class-container">
      <h1>Host a Class</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="link">Meet Link</label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button type="submit">Host Class</button>
      </form>
    </div>
  );
};

export default HostClass;
