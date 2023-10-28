import InputField from "./inputField";
import FormButtons from "../formButtons";
import "../../styles/inputEducation.css";

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
  addEducation,
  handleCancel,
  editEducationItem,
  deleteEducationItem,
}) {
  return (
    <>
      <div className="card education-input">
        <h1 className="card-title">Education</h1>
        <EducationList
          educationArr={educationArr}
          editEducationItem={editEducationItem}
        />
        <button
          style={{ display: educationFormDisplay ? "none" : "grid" }}
          onClick={addEducation}
        >
          Add Education
        </button>
        <form
          onSubmit={submitEducation}
          id="education-form"
          style={{ display: educationFormDisplay ? "grid" : "none" }}
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
            deleteItem={deleteEducationItem}
            cancelId="education-cancel-btn"
            deleteId="education-delete-btn"
          />
        </form>
      </div>
    </>
  );
}
