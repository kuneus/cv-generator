import InputField from "./inputField";
import FormButtons from "../formButtons";

export default function InputEditEducation({
  schoolName,
  schoolLocation,
  degree,
  schoolStart,
  schoolEnd,
  submitEducation,
  handleChanges,
}) {
  return (
    <>
      <div className="card">
        <h1 className="card-title">Education</h1>
        <form onSubmit={submitEducation} id="education-form">
          <InputField
            id="school-name-input"
            value={schoolName}
            onChange={handleChanges}
            label="School Name"
          />
          <InputField
            id="school-location-input"
            value={schoolLocation}
            onChange={handleChanges}
            label="City, State, Country"
          />
          <InputField
            id="school-degree-input"
            value={degree}
            onChange={handleChanges}
            label="Degree"
          />
          <InputField
            id="school-start-input"
            value={schoolStart}
            onChange={handleChanges}
            label="Start Month/Year"
          />
          <InputField
            id="school-end-input"
            value={schoolEnd}
            onChange={handleChanges}
            label="End Month/Year"
          />
          <FormButtons />
        </form>
      </div>
    </>
  );
}
