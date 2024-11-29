import React, { useState, useEffect } from "react";
import "./attendance.css";

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    // Fetch attendance data from JSON file
    fetch("/src/pages/home/attendance.json")
      .then((response) => response.json())
      .then((data) => setAttendanceData(data.attendance))
      .catch((error) => console.error("Error fetching attendance data:", error));
  }, []);

  return (
    <div className="attendance-container">
      <h1 className="attendance-title">Attendance Record</h1>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((entry, index) => (
            <tr key={index} className={entry.status === "Present" ? "present" : "absent"}>
              <td>{entry.date}</td>
              <td>{entry.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
