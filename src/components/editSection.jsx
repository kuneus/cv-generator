import "../styles/editSection.css";
import InputEditPersonal from "./all-inputs/inputEditPersonal";
import InputEditEducation from "./all-inputs/inputEditEducation";

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
  schoolName,
  handleSchoolNameChange,
  schoolLocation,
  handleSchoolLocationChange,
  degree,
  handleDegreeChange,
  schoolStart,
  handleSchoolStartChange,
  schoolEnd,
  handleSchoolEndChange,
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
        <InputEditEducation
          schoolName={schoolName}
          handleSchoolNameChange={handleSchoolNameChange}
          schoolLocation={schoolLocation}
          handleSchoolLocationChange={handleSchoolLocationChange}
          degree={degree}
          handleDegreeChange={handleDegreeChange}
          schoolStart={schoolStart}
          handleSchoolStartChange={handleSchoolStartChange}
          schoolEnd={schoolEnd}
          handleSchoolEndChange={handleSchoolEndChange}
        />
      </div>
    </>
  );
}
