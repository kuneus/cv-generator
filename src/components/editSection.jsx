import "../styles/editSection.css";
import inputField from "./all-inputs/inputField";

const personalInputs = [
  { id: "fName-input", label: "First Name", type: "text" },
  { id: "lName-input", label: "Last Name", type: "text" },
  { id: "phone-input", label: "Phone Number", type: "tel" },
  { id: "location-input", label: "Location", type: "text" },
  { id: "email-input", label: "Email", type: "email" },
  { id: "role-input", label: "Current Role", type: "text" },
  { id: "linkedIn-input", label: "LinkedIn", type: "text" },
];
const educationInputs = [
  { id: "school-name-input", label: "Name of School", type: "text" },
  {
    id: "school-location-input",
    label: "City, State, Country",
    type: "text",
  },
  { id: "school-degree-input", label: "Degree", type: "text" },
  { id: "school-start-input", label: "Start Month/Year", type: "text" },
  { id: "school-end-input", label: "End Month/Year", type: "text" },
];
const workInputs = [
  { id: "work-name-input", label: "Company", type: "text" },
  {
    id: "work-location-input",
    label: "City, State, Country",
    type: "text",
  },
  { id: "work-role-input", label: "Position", type: "text" },
  { id: "work-start-input", label: "Start Month/Year", type: "text" },
  { id: "work-end-input", label: "End Month/Year", type: "text" },
];

function Card({ title, inputs, value, onChange }) {
  const inputElements = inputs.map((input) => (
    <li key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <input
        id={input.id}
        type={input.type}
        value={value}
        onChange={onChange}
      />
    </li>
  ));

  return (
    <>
      <div className="card">
        <h1 className="card-title">{title}</h1>
        <ul>{inputElements}</ul>
      </div>
    </>
  );
}

export default function EditSection({ onChange, value }) {
  return (
    <>
      <div className="edit-section">
        <Card title={"Personal"} inputs={personalInputs} onChange={onChange} />
        <Card
          title={"Education"}
          inputs={educationInputs}
          value={value}
          onChange={onChange}
        />
        <Card
          title={"Work Experience"}
          inputs={workInputs}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}
