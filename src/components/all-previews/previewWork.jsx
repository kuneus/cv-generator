import { v4 as uuidv4 } from "uuid";
import { Fragment } from "react";

function CreateNewWork({ workArr }) {
  return (
    <ul className="preview-work-items">
      {workArr.map((work) => (
        <Fragment key={uuidv4}>
          <li>{work[0]}</li>
          <li>{work[1]}</li>
          <li>{work[2]}</li>
          <li>{work[3]}</li>
          <li>{work[4]}</li>
          <li>{work[5]}</li>
        </Fragment>
      ))}
    </ul>
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
    <div className="preview-work">
      <h1 className="preview-title">Work Experience</h1>
      <CreateNewWork workArr={workArr} />
      <ul className="preview-work-items">
        <li>{previewCompanyName}</li>
        <li>{previewCompanyLocation}</li>
        <li>{previewCompanyRole}</li>
        <li>{previewCompanyStart}</li>
        <li>{previewCompanyEnd}</li>
        <li>{previewCompanyDescription}</li>
      </ul>
    </div>
  );
}
