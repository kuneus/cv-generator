// **** DOESN'T WORK YET ****
function CreateNewEducation({ educationArr }) {
  return (
    <ul className="preview-education-items">
      {educationArr.map((education) => (
        <>
          <li key={education[0]}>{education[0]}</li>
          <li key={education[1]}>{education[1]}</li>
          <li key={education[2]}>{education[2]}</li>
          <li key={education[3]}>{education[3]}</li>
          <li key={education[4]}>{education[4]}</li>
        </>
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
      <div className="preview-education-items">
        <div>{previewSchoolName}</div>
        <div>{previewSchoolLocation}</div>
        <div>{previewDegree}</div>
        <div>{previewSchoolStart}</div>
        <div>{previewSchoolEnd}</div>
      </div>
      <CreateNewEducation educationArr={educationArr} />
    </div>
  );
}
