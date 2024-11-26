import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // Track registration or OTP step
  const [activationToken, setActivationToken] = useState(""); // Store activation token
  const navigate = useNavigate();

  // Register user
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      console.log("Registration Response:", data); // Debug response

      if (res.ok) {
        alert(data.message); // OTP sent
        setActivationToken(data.activationToken); // Store token for OTP verification
        setStep(2); // Move to OTP verification step
      } else {
        alert(data.message); // Error message
      }
    } catch (error) {
      console.error("Registration Error:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  // Verify OTP
  const handleOtpVerification = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/user/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp, activationToken }),
      });

      const data = await res.json();
      console.log("Verification Response:", data); // Debug response

      if (res.ok) {
        alert(data.message); // Successful registration
        navigate("/login"); // Redirect to login
      } else {
        alert(data.message); // Error message
      }
    } catch (error) {
      console.error("OTP Verification Error:", error);
      alert("An error occurred during verification. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      {step === 1 ? (
        <form className="auth-form" onSubmit={handleRegister}>
          <h1>Signup</h1>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Signup</button>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      ) : (
        <form className="auth-form" onSubmit={handleOtpVerification}>
          <h1>Verify OTP</h1>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Verify</button>
        </form>
      )}
    </div>
  );
};

export default Signup;
