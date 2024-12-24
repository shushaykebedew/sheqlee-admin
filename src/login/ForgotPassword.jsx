import "./forgotpassword.css";
import Hero from "../components/hero/Hero";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailError, setEmailError] = useState("");

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

  return (
    <div className="forgot-passowrd-container">
      <Hero />
      <div className="form-container">
        <form className="forgot-password-form">
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
          {emailError && <p className="error-message">{emailError}</p>}{" "}
          {/* Display error */}
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
