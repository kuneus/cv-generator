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

function PreviewEducation() {
  return (
    <div className="preview-education">
      <h1>Education</h1>
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
      <PreviewEducation />
      <PreviewWork />
    </div>
  );
}
