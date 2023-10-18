export default function InputField({ id, type, value, onChange, label }) {
  return (
    <li>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type ? type : "text"}
        value={value}
        onChange={onChange}
      />
    </li>
  );
}
