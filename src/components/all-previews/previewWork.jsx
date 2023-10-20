function CreateNewWork({ workArr }) {
  return (
    <ul className="preview-work-items">
      {workArr.map((work) => (
        <>
          <li key={work[0]}>{work[0]}</li>
          <li key={work[1]}>{work[1]}</li>
          <li key={work[2]}>{work[2]}</li>
          <li key={work[3]}>{work[3]}</li>
          <li key={work[4]}>{work[4]}</li>
        </>
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
      <div className="preview-work-items">
        <div>{previewCompanyName}</div>
        <div>{previewCompanyLocation}</div>
        <div>{previewCompanyRole}</div>
        <div>{previewCompanyStart}</div>
        <div>{previewCompanyEnd}</div>
        <div>{previewCompanyDescription}</div>
      </div>
      <CreateNewWork workArr={workArr} />
    </div>
  );
}
