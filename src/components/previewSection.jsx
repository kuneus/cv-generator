import "../styles/previewSection.css";

function PreviewPersonalInfo({
  fullName,
  previewPhone,
  previewEmail,
  previewLocation,
  previewRole,
  previewLinkedIn,
}) {
  return (
    <div className="preview-personal-info">
      <h1>{fullName}</h1>
      <div>{previewPhone}</div>
      <div>{previewEmail}</div>
      <div>{previewLocation}</div>
      <div>{previewRole}</div>
      <div>{previewLinkedIn}</div>
    </div>
  );
}

// load array of educational experiences

function PreviewEducation({
  previewSchoolName,
  previewSchoolLocation,
  previewDegree,
  previewSchoolStart,
  previewSchoolEnd,
}) {
  return (
    <div className="preview-education">
      <h1>Education</h1>
      <div>{previewSchoolName}</div>
      <div>{previewSchoolLocation}</div>
      <div>{previewDegree}</div>
      <div>{previewSchoolStart}</div>
      <div>{previewSchoolEnd}</div>
    </div>
  );
}

// need to create components for adding new info for education and work experience

function PreviewWork() {
  return (
    <div className="preview-work">
      <h1>Work Experience</h1>
    </div>
  );
}

export default function PreviewSection({
  fullName,
  previewPhone,
  previewEmail,
  previewLocation,
  previewRole,
  previewLinkedIn,
  previewSchoolName,
  previewSchoolLocation,
  previewDegree,
  previewSchoolStart,
  previewSchoolEnd,
}) {
  return (
    <div className="preview-section">
      <PreviewPersonalInfo
        fullName={fullName}
        previewPhone={previewPhone}
        previewEmail={previewEmail}
        previewLocation={previewLocation}
        previewRole={previewRole}
        previewLinkedIn={previewLinkedIn}
      />
      <PreviewEducation
        previewSchoolName={previewSchoolName}
        previewSchoolLocation={previewSchoolLocation}
        previewDegree={previewDegree}
        previewSchoolStart={previewSchoolStart}
        previewSchoolEnd={previewSchoolEnd}
      />
      <PreviewWork />
    </div>
  );
}
