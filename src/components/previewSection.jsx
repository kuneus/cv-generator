import "../styles/previewSection.css";
import PreviewPersonalInfo from "./all-previews/previewPersonalInfo";
import PreviewEducation from "./all-previews/previewEducation";
import PreviewWork from "./all-previews/previewWork";

// load array of educational experiences

// need to create components for adding new info for education and work experience

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
  previewCompanyName,
  previewCompanyLocation,
  previewCompanyRole,
  previewCompanyStart,
  previewCompanyEnd,
  previewCompanyDescription,
  educationArr,
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
        educationArr={educationArr}
      />
      <PreviewWork
        previewCompanyName={previewCompanyName}
        previewCompanyLocation={previewCompanyLocation}
        previewCompanyRole={previewCompanyRole}
        previewCompanyStart={previewCompanyStart}
        previewCompanyEnd={previewCompanyEnd}
        previewCompanyDescription={previewCompanyDescription}
      />
    </div>
  );
}
