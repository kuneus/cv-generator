import { v4 as uuidv4 } from "uuid";
import { Fragment } from "react";

function CreateNewEducation({ educationArr }) {
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
    <div className="preview-education">
      <h1 className="preview-title">Education</h1>
      <CreateNewEducation educationArr={educationArr} />
      <div className="preview-education-items">
        <div>{previewSchoolName}</div>
        <div>{previewSchoolLocation}</div>
        <div>{previewDegree}</div>
        <div>{previewSchoolStart}</div>
        <div>{previewSchoolEnd}</div>
      </div>
    </div>
  );
}
