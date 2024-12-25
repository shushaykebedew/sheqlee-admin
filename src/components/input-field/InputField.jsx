import "./inputfield.css";

function InputField({ label, type, value, onChange, error, placeholder }) {
  return (
    <div className="input-field">
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default InputField;
