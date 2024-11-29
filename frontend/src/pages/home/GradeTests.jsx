import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GradeTests.css';

const GradeTests = () => {
  const [testsToGrade, setTestsToGrade] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/grade-tests', {
          headers: {
            'x-skip-auth': 'true', // Skips authentication for testing
          },
        });
        setTestsToGrade(response.data.testsToGrade); // Set the fetched tests data
        setLoading(false);
      } catch (err) {
        setError(err.message); // Handle any errors that occur during the fetch
        setLoading(false);
      }
    };

    fetchTests(); // Call the function to fetch the tests when the component mounts
  }, []); // Empty dependency array means it runs once on component mount

  if (loading) {
    return <div>Loading tests...</div>;
  }

  if (error) {
    return <div>Error loading tests: {error}</div>;
  }

  return (
    <div className="grade-tests">
      <h2>Grade Tests</h2>
      <table>
        <thead>
          <tr>
            <th>Test Name</th>
            <th>Students</th>
          </tr>
        </thead>
        <tbody>
          {testsToGrade.map((test) => (
            <tr key={test.testId}>
              <td>{test.testName}</td>
              <td>{test.students.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeTests;
