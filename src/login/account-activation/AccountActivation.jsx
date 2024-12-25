import { useNavigate } from "react-router-dom";

import "./accountactivation.css";
import Hero from "../../components/hero/Hero";
import Button from "../../components/button/Button";
import InputField from "../../components/input-field/InputField";
import useEmailValidation from "../../hooks/useEmailValidation";

function AccountActivation() {
  const navigate = useNavigate();
  const { email, emailIsValid, emailError, handleEmailChange } =
    useEmailValidation();

  function handleReset(e) {
    e.preventDefault();
    if (emailIsValid) {
      navigate("/activation-form", { state: { email } });
    }
  }

  return (
    <div className="account-activation-container">
      <Hero />
      <div className="form-container">
        <form className="account-activation-form" onSubmit={handleReset}>
          <label>Account Activation?</label>
          <p className="activation-message">
            Please enter your email to get account activation code.
          </p>
          <InputField
            type="email"
            placeholder="Your email..."
            value={email}
            onChange={handleEmailChange}
            error={emailError}
          />

          <div className="action-buttons">
            <Button
              type="submit"
              className={`button ${emailIsValid ? "valid" : ""}`}
              disabled={!emailIsValid}
            >
              Activate
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountActivation;
