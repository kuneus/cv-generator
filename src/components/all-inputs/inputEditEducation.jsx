import InputField from "./inputField";
import FormButtons from "../formButtons";

export default function InputEditEducation({
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
  submitEducation,
}) {
  return (
    <>
      <div className="card">
        <h1 className="card-title">Education</h1>
        <form onSubmit={submitEducation} id="education-form">
          <InputField
            id="school-name-input"
            value={schoolName}
            onChange={handleSchoolNameChange}
            label="School Name"
          />
          <InputField
            id="school-location-input"
            value={schoolLocation}
            onChange={handleSchoolLocationChange}
            label="City, State, Country"
          />
          <InputField
            id="school-degree-input"
            value={degree}
            onChange={handleDegreeChange}
            label="Degree"
          />
          <InputField
            id="school-start-input"
            value={schoolStart}
            onChange={handleSchoolStartChange}
            label="Start Month/Year"
          />
          <InputField
            id="school-end-input"
            value={schoolEnd}
            onChange={handleSchoolEndChange}
            label="End Month/Year"
          />
          <FormButtons />
        </form>
      </div>
    </>
  );
}
