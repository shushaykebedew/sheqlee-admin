import { useState } from "react";
import "./login.css";
import Hero from "../components/hero/Hero";
import { Link } from "react-router-dom";
import InputField from "../components/input-field/InputField";
import PasswordField from "../components/password-field/PasswordField";
import Button from "../components/button/Button";
import useEmailValidation from "../hooks/useEmailValidation";
import usePasswordValidation from "../hooks/usePasswordValidation"; // Import the custom hook for password validation

function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { email, emailError, handleEmailChange } = useEmailValidation();
  const { passwordError } = usePasswordValidation(password); // Use the custom hook for password validation

  function handlePasswordChange(e) {
    const newPassword = e.target.value;
    setPassword(newPassword);
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
          First time logging in? Click{" "}
          <Link to="/account-activation">here</Link> to activate your account.
        </p>
      </div>
    </div>
  );
}

export default Login;
