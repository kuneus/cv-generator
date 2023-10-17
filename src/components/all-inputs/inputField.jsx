export default function inputField({ id, type, value, onChange, label }) {
  return (
    <li>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange} />
    </li>
  );
}
