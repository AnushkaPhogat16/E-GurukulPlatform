import React, { useState, useEffect } from 'react';
import './TestApp.css';
import questionsData from './questions.json';

const TestApp = () => {
  const [startTest, setStartTest] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5-minute timer
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questionsData.length).fill(null));

  useEffect(() => {
    if (startTest && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [startTest, timeLeft]);

  const handleStartTest = () => {
    setStartTest(true);
  };

  const handleOptionClick = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = index;
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    const score = answers.reduce((total, answer, index) => {
      return answer === questionsData[index].correctAnswer ? total + 1 : total;
    }, 0);
    alert(`Test submitted! Your score: ${score}/${questionsData.length}`);
    setStartTest(false);
    setCurrentQuestionIndex(0);
    setTimeLeft(300);
    setAnswers(Array(questionsData.length).fill(null)); // Reset answers
  };

  if (!startTest) {
    return (
      <div className="container">
        <div className="rules">
          <h1>Test Rules</h1>
          <ul>
            <li>1. Each question has 4 options.</li>
            <li>2. You have 5 minutes to complete the test.</li>
            <li>3. Submit the test when you're done.</li>
          </ul>
          <button onClick={handleStartTest} className="start-button">
            Start Test
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questionsData[currentQuestionIndex];

  return (
    <div className="container">
      <div className="header">
        <p className="timer">
          Time Left: {Math.floor(timeLeft / 60)}:
          {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
        </p>
      </div>
      <div className="question-card">
        <h2>{currentQuestion.question}</h2>
        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`option-button ${
                answers[currentQuestionIndex] === index ? 'selected' : ''
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="navigation">
        <button
          onClick={handlePreviousQuestion}
          className="nav-button"
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNextQuestion}
          className="nav-button"
          disabled={currentQuestionIndex === questionsData.length - 1}
        >
          Next
        </button>
      </div>
      <div className="submit-section">
        <button onClick={handleSubmit} className="submit-button">
          Submit Test
        </button>
      </div>
    </div>
  );
};

export default TestApp;
