import { v4 as uuidv4 } from "uuid";
import "../../styles/previewWork.css";

function CreateNewWork({ workArr }) {
  return (
    <div className="preview-work-items">
      {workArr.map((work) => (
        <ul key={uuidv4} className="preview-work-card">
          <li>{work[0]}</li>
          <li>{work[1]}</li>
          <li>{work[2]}</li>
          <li>
            {work[3]} - {work[4]}
          </li>
          <li>{work[5]}</li>
        </ul>
      ))}
    </div>
  );
}

export default function PreviewWork({
  previewCompanyName,
  previewCompanyLocation,
  previewCompanyRole,
  previewCompanyStart,
  previewCompanyEnd,
  previewCompanyDescription,
  workArr,
}) {
  return (
    <div className="preview-work preview-card">
      <h1 className="preview-title">Work Experience</h1>
      <CreateNewWork workArr={workArr} />
      <ul className="preview-work-input">
        <li>{previewCompanyName}</li>
        <li>{previewCompanyLocation}</li>
        <li>{previewCompanyRole}</li>
        <li>
          {previewCompanyStart &&
            previewCompanyEnd &&
            previewCompanyStart + " - " + previewCompanyEnd}
        </li>
        <li>{previewCompanyDescription}</li>
      </ul>
    </div>
  );
}
