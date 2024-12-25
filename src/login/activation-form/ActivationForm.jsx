import { useState, useEffect } from "react";
import "./activationform.css";
import Hero from "../../components/hero/Hero";
import Button from "../../components/button/Button";
import InputField from "../../components/input-field/InputField";
import PasswordField from "../../components/password-field/PasswordField";
import useResetCodeValidation from "../../hooks/useResetCodeValidation";
import usePasswordValidation from "../../hooks/usePasswordValidation"; // Import the custom password validation hook

function ActivationForm() {
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { resetCode, setResetCode, resetCodeError, validateResetCode } =
    useResetCodeValidation();

  const { passwordError } = usePasswordValidation(passwordOne, passwordTwo); // Use the custom hook for validation

  useEffect(() => {
    if (resetCode) {
      validateResetCode();
    }
  }, [resetCode]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!passwordError && !resetCodeError) {
      console.log("Password successfully reset!");
    }
  }

  function togglePasswordVisibility() {
    setShowPassword((prevState) => !prevState);
  }

  const isFormValid =
    passwordOne &&
    (passwordTwo ? passwordTwo : true) &&
    resetCode &&
    !passwordError &&
    !resetCodeError;

  return (
    <div className="activation-container">
      <Hero />
      <div className="activation-form-container">
        <form className="activation-form" onSubmit={handleSubmit}>
          <div className="left">
            <label>Enter Code</label>
            <p className="forgot-message">
              Please enter the one-time code sent to your email and set a new
              password.
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
              placeholder="Confirm Password..."
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

export default ActivationForm;
