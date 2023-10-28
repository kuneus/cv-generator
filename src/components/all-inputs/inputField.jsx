import "../../styles/inputField.css";

export default function InputField({ id, type, value, onChange, label }) {
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type ? type : "text"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
