import { useState } from "react";

import "./login.css";
import Hero from "../components/hero/Hero";
import { Link } from "react-router-dom";
import InputField from "../components/input-field/InputField";
import PasswordField from "../components/password-field/PasswordField";
import Button from "../components/button/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  function togglePasswordVisibility() {
    setShowPassword((prevState) => !prevState);
  }

  const isFormValid = email && password && !emailError && !passwordError;

  return (
    <div className="login-container">
      <Hero />
      <div className="form-container">
        <form className="login-form">
          <InputField
            label="Login"
            type="email"
            placeholder="Email..."
            value={email}
            onChange={handleEmailChange}
            error={emailError}
          />

          <PasswordField
            placeholder="Password..."
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            showEyeIcon
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />

          <div className="action-buttons">
            <Button
              type="submit"
              className={`button ${isFormValid ? "valid" : ""}`}
              disabled={!isFormValid}
            >
              Log in
            </Button>
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
