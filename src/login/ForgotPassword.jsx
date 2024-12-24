import "./forgotpassword.css";
import Hero from "../components/hero/Hero";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleEmailChange(e) {
    const emailInput = e.target.value;
    setEmail(emailInput);

    if (!emailInput) {
      setEmailIsValid(false);
      setEmailError("Email is required.");
    } else if (emailRegex.test(emailInput)) {
      setEmailIsValid(true);
      setEmailError(""); // Clear error if email is valid
    } else {
      setEmailIsValid(false);
      setEmailError("Please enter a valid email address.");
    }
  }

  function handleReset(e) {
    e.preventDefault(); // Prevent default form submission
    if (emailIsValid) {
      // Navigate to NewPassword component
      navigate("/newpassword", { state: { email } }); // Pass email as state
    }
  }

  return (
    <div className="forgot-password-container">
      <Hero />
      <div className="form-container">
        <form className="forgot-password-form" onSubmit={handleReset}>
          <label>Forgot Password?</label>
          <p className="forgot-message">
            Please enter your email to get a password reset code.
          </p>
          <input
            type="email"
            placeholder="Your email..."
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="error-message">{emailError}</p>}
          <div className="action-buttons">
            <button
              type="submit"
              className={`reset-button ${emailIsValid ? "valid" : ""}`}
              disabled={!emailIsValid}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
