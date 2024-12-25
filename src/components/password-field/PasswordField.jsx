import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./passwordfield.css";

function PasswordField({
  value,
  onChange,
  error,
  placeholder,
  showEyeIcon,
  showPassword,
  togglePasswordVisibility,
}) {
  return (
    <div className="password-field">
      <div className="password-field-form">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {showEyeIcon && (
          <span className="show-eye-icon" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="eye-icon"
            />
          </span>
        )}
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default PasswordField;
