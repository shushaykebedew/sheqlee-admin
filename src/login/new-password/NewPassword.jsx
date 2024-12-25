import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import "./newpassword.css";
import Hero from "../../components/hero/Hero";
import Button from "../../components/button/Button";
import InputField from "../../components/input-field/InputField";
import PasswordField from "../../components/password-field/PasswordField";

function NewPassword() {
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [resetCodeError, setResetCodeError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  function togglePasswordVisibility() {
    setShowPassword((prevState) => !prevState);
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
              below.
            </p>

            <InputField
              type="text"
              placeholder="Enter Code"
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
              error={resetCodeError}
            />
          </div>
          <div className="right">
            <label>New Password</label>
            <PasswordField
              placeholder="New Password..."
              value={passwordOne}
              onChange={(e) => setPasswordOne(e.target.value)}
              showEyeIcon={true}
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
            <PasswordField
              placeholder="Password..."
              value={passwordTwo}
              error={passwordError}
              onChange={(e) => setPasswordTwo(e.target.value)}
              showEyeIcon={false}
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
            <div className="action-buttons">
              <Button
                type="submit"
                className={`button ${isFormValid ? "valid" : ""}`}
                disabled={!isFormValid}
              >
                Save
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewPassword;
