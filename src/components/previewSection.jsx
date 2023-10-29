import "../styles/previewSection.css";
import PreviewPersonalInfo from "./all-previews/previewPersonalInfo";
import PreviewEducation from "./all-previews/previewEducation";
import PreviewWork from "./all-previews/previewWork";

export default function PreviewSection({
  fullName,
  previewPhone,
  previewEmail,
  previewLocation,
  previewRole,
  schoolInfo,
  workInfo,
  educationArr,
  workArr,
}) {
  return (
    <div className="left-container">
      <div className="preview-section">
        <PreviewPersonalInfo
          fullName={fullName}
          previewPhone={previewPhone}
          previewEmail={previewEmail}
          previewLocation={previewLocation}
          previewRole={previewRole}
        />
        <PreviewEducation
          previewSchoolName={schoolInfo.schoolName}
          previewSchoolLocation={schoolInfo.schoolLocation}
          previewDegree={schoolInfo.degree}
          previewSchoolStart={schoolInfo.schoolStart}
          previewSchoolEnd={schoolInfo.schoolEnd}
          educationArr={educationArr}
        />
        <PreviewWork
          previewCompanyName={workInfo.company}
          previewCompanyLocation={workInfo.companyLocation}
          previewCompanyRole={workInfo.companyRole}
          previewCompanyStart={workInfo.companyStart}
          previewCompanyEnd={workInfo.companyEnd}
          previewCompanyDescription={workInfo.companyDescription}
          workArr={workArr}
        />
      </div>
    </div>
  );
}
