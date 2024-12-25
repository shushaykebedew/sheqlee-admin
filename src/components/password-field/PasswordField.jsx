import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./passwordfield.css";

function PasswordField({
  label,
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
      {label && <label>{label}</label>}

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

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default PasswordField;
