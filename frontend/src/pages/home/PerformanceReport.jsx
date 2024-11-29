import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PerformanceReport.css';

const PerformanceReport = () => {
  const [performanceData, setPerformanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch performance data from API
  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/performance', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Ensure token is passed
          },
        });
        setPerformanceData(response.data); // Set data to state
        setLoading(false); // Stop loading
      } catch (err) {
        setError('Error fetching performance data: ' + err.message);
        setLoading(false); // Stop loading
      }
    };

    fetchPerformanceData(); // Call function to fetch data
  }, []);

  if (loading) {
    return <div className="performance-report">Loading performance data...</div>;
  }

  if (error) {
    return (
      <div className="performance-report error">
        {error}
      </div>
    );
  }

  return (
    <div className="performance-report">
      <h2>Performance Report</h2>
      <table className="performance-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {performanceData.length > 0 ? (
            performanceData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.score}</td>
                <td>{new Date(item.date).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No performance data available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceReport;
