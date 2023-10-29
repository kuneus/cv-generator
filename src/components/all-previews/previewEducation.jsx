import { v4 as uuidv4 } from "uuid";
import "../../styles/previewEducation.css";

function EducationList({ educationArr }) {
  return (
    <div className="preview-education-items">
      {educationArr.map((education) => (
        <div key={uuidv4()}>
          <ul className="preview-education-card">
            <li>{education[0]}</li>
            <li>{education[1]}</li>
            <li>{education[2]}</li>
            <li>
              {education[3] !== "" && education[4] !== ""
                ? education[3] + " - " + education[4]
                : null}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function PreviewEducation({
  previewSchoolName,
  previewSchoolLocation,
  previewDegree,
  previewSchoolStart,
  previewSchoolEnd,
  educationArr,
}) {
  return (
    <div className="preview-education preview-card">
      <h1 className="preview-title">Education</h1>
      <EducationList educationArr={educationArr} />
      <ul className="preview-education-input">
        <li>{previewSchoolName}</li>
        <li>{previewSchoolLocation}</li>
        <li>{previewDegree}</li>
        <li>
          {previewSchoolStart &&
            previewSchoolEnd &&
            previewSchoolStart + " - " + previewSchoolEnd}
        </li>
      </ul>
    </div>
  );
}
