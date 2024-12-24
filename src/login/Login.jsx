import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./login.css";
import Hero from "../components/hero/Hero";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const togglePasswordVisibility = () => setPasswordIsVisible((prev) => !prev);

  function validateEmail(email) {
    if (!email) {
      return "Email is required.";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  }

  function validatePassword(password) {
    if (!password) {
      return "Password is required.";
    }
    return "";
  }

  function handleEmailChange(e) {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(validateEmail(newEmail));
  }

  function handlePasswordChange(e) {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword));
  }

  const isFormValid = email && password && !emailError && !passwordError;

  return (
    <div className="login-container">
      <Hero />
      <div className="form-container">
        <form className="login-form">
          <label>Log in</label>
          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="error-message">{emailError}</p>}
          <div className="password-container">
            <input
              type={passwordIsVisible ? "text" : "password"}
              placeholder="Password..."
              value={password}
              onChange={handlePasswordChange}
            />
            <span
              className="show-password-icon"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon
                icon={passwordIsVisible ? faEyeSlash : faEye}
                className="eye-icon"
              />
            </span>
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>}
          <div className="action-buttons">
            <button
              type="submit"
              className={`reset-button ${isFormValid ? "valid" : ""}`}
              disabled={!isFormValid}
            >
              Log in
            </button>
            <span className="reset-link">
              Forgot password? <Link to="/forgot-password">Reset</Link>
            </span>
          </div>
        </form>
        <p className="first-time-text">
          First time logging in? Click <a href="#">here</a> to activate your
          account.
        </p>
      </div>
    </div>
  );
}

export default Login;
