import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import "./newpassword.css";
import Hero from "../components/hero/Hero";

function NewPassword() {
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [resetCodeError, setResetCodeError] = useState("");

  // Password validation function
  function validatePasswords() {
    if (passwordOne !== passwordTwo) {
      setPasswordError("Passwords do not match.");
      return false;
    }

    if (passwordOne.length < 6 || passwordTwo.length < 6) {
      setPasswordError("Passwords must be at least 6 characters.");
      return false;
    }

    // Check for at least one uppercase letter in both passwords
    if (!/[A-Z]/.test(passwordOne) || !/[A-Z]/.test(passwordTwo)) {
      setPasswordError("Passwords must contain at least one uppercase letter.");
      return false;
    }

    // Check for at least one number in both passwords
    if (!/\d/.test(passwordOne) || !/\d/.test(passwordTwo)) {
      setPasswordError("Passwords must contain at least one number.");
      return false;
    }

    setPasswordError("");
    return true;
  }

  // Reset Code validation
  function validateResetCode() {
    const codeRegex = /^\d{6}$/; // 6-digit number
    if (!resetCode) {
      setResetCodeError("Reset code is required.");
      return false;
    }
    if (!codeRegex.test(resetCode)) {
      setResetCodeError("The reset code must be a 6-digit number.");
      return false;
    }
    setResetCodeError("");
    return true;
  }

  useEffect(() => {
    if (passwordOne && passwordTwo) {
      validatePasswords();
    } else {
      setPasswordError("");
    }
  }, [passwordOne, passwordTwo]);

  useEffect(() => {
    if (resetCode) {
      validateResetCode();
    }
  }, [resetCode]);

  function handleSubmit(e) {
    e.preventDefault();
    if (validatePasswords() && validateResetCode()) {
      console.log("Password successfully reset!");
    }
  }

  const isFormValid =
    passwordOne &&
    passwordTwo &&
    resetCode &&
    !passwordError &&
    !resetCodeError;

  return (
    <div className="new-password-container">
      <Hero />
      <div className="new-password-form-container">
        <form className="new-password-form" onSubmit={handleSubmit}>
          <div className="left">
            <label>Enter Code</label>
            <p className="forgot-message">
              We have sent a reset code to your email, Please enter the code
              below
            </p>
            <input
              type="text"
              placeholder="Enter Code..."
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
            />
            {resetCodeError && (
              <p className="error-message">{resetCodeError}</p>
            )}
          </div>
          <div className="right">
            <label>New Password?</label>

            <div className="password-container">
              <input
                type={passwordIsVisible ? "text" : "password"}
                placeholder="Password..."
                value={passwordOne}
                onChange={(e) => setPasswordOne(e.target.value)}
              />
              <span
                className="show-password-icon"
                onClick={() => setPasswordIsVisible(!passwordIsVisible)}
              >
                <FontAwesomeIcon
                  icon={passwordIsVisible ? faEyeSlash : faEye}
                  className="eye-icon"
                />
              </span>
              <input
                type={passwordIsVisible ? "text" : "password"}
                placeholder="Confirm Password..."
                value={passwordTwo}
                onChange={(e) => setPasswordTwo(e.target.value)}
              />
            </div>

            {passwordError && <p className="error-message">{passwordError}</p>}

            <div className="action-buttons">
              <button
                type="submit"
                className={`save-button ${isFormValid ? "valid" : ""}`}
                disabled={!isFormValid}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewPassword;
