import { v4 as uuidv4 } from "uuid";
import { Fragment } from "react";
import "../../styles/previewEducation.css";

function EducationList({ educationArr }) {
  return (
    <ul className="preview-education-items">
      {educationArr.map((education) => (
        <Fragment key={uuidv4()}>
          <li>{education[0]}</li>
          <li>{education[1]}</li>
          <li>{education[2]}</li>
          <li>{education[3]}</li>
          <li>{education[4]}</li>
        </Fragment>
      ))}
    </ul>
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
      <ul className="preview-education-items">
        <li>{previewSchoolName}</li>
        <li>{previewSchoolLocation}</li>
        <li>{previewDegree}</li>
        <li>{previewSchoolStart}</li>
        <li>{previewSchoolEnd}</li>
      </ul>
    </div>
  );
}
