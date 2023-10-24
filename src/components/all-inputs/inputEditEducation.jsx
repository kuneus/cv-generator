import InputField from "./inputField";
import FormButtons from "../formButtons";
import { v4 as uuidv4 } from "uuid";

function EducationList({ educationArr }) {
  return (
    <ul>
      {educationArr.map((education) => (
        <li key={uuidv4}>
          <button>{education[0]}</button>
        </li>
      ))}
    </ul>
  );
}

export default function InputEditEducation({
  schoolName,
  schoolLocation,
  degree,
  schoolStart,
  schoolEnd,
  submitEducation,
  handleChanges,
  educationArr,
  displayForm,
  educationFormDisplay,
  handleCancel,
}) {
  return (
    <>
      <div className="card">
        <h1 className="card-title">Education</h1>
        <EducationList educationArr={educationArr} />
        <button
          style={{ display: displayForm ? "none" : "block" }}
          onClick={educationFormDisplay}
        >
          Add Education
        </button>
        {/* WORK ON ADD EDUCATION BUTTON! */}
        <form
          onSubmit={submitEducation}
          id="education-form"
          style={{ display: displayForm ? "block" : "none" }}
        >
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
          <FormButtons
            cancel={handleCancel}
            cancelId="education-cancel-btn"
            deleteId="education-delete-btn"
          />
        </form>
      </div>
    </>
  );
}
