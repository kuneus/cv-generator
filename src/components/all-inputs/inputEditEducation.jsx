import InputField from "./inputField";
import FormButtons from "../formButtons";
import { v4 as uuidv4 } from "uuid";

function EducationList({ educationArr, editEducationItem }) {
  return (
    <ul>
      {educationArr.map((education) => (
        <li key={education.id}>
          <button
            id={education.id}
            className="education-item"
            onClick={editEducationItem}
          >
            {education[0]}
          </button>
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
  educationFormDisplay,
  handleEducationFormDisplay,
  handleCancel,
  editEducationItem,
}) {
  return (
    <>
      <div className="card">
        <h1 className="card-title">Education</h1>
        <EducationList
          educationArr={educationArr}
          editEducationItem={editEducationItem}
        />
        <button
          style={{ display: educationFormDisplay ? "none" : "block" }}
          onClick={handleEducationFormDisplay}
        >
          Add Education
        </button>
        {/* WORK ON ADD EDUCATION BUTTON! */}
        <form
          onSubmit={submitEducation}
          id="education-form"
          style={{ display: educationFormDisplay ? "block" : "none" }}
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
