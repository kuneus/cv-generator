import "../styles/editSection.css";
import InputEditPersonal from "./all-inputs/inputEditPersonal";

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

export default function EditSection({
  firstName,
  handleFirstNameChange,
  lastName,
  handleLastNameChange,
  phoneNumber,
  handlePhoneChange,
  location,
  handleLocationChange,
  email,
  handleEmailChange,
  role,
  handleRoleChange,
  linkedIn,
  handleLinkedInChange,
}) {
  return (
    <>
      <div className="edit-section">
        <InputEditPersonal
          firstName={firstName}
          handleFirstNameChange={handleFirstNameChange}
          lastName={lastName}
          handleLastNameChange={handleLastNameChange}
          phoneNumber={phoneNumber}
          handlePhoneChange={handlePhoneChange}
          location={location}
          handleLocationChange={handleLocationChange}
          email={email}
          handleEmailChange={handleEmailChange}
          role={role}
          handleRoleChange={handleRoleChange}
          linkedIn={linkedIn}
          handleLinkedInChange={handleLinkedInChange}
        />
      </div>
    </>
  );
}
