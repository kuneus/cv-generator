import "../styles/editSection.css";
import InputEditPersonal from "./all-inputs/inputEditPersonal";
import InputEditEducation from "./all-inputs/inputEditEducation";
import InputEditWork from "./all-inputs/inputEditWork";

export default function EditSection({
  firstName,
  handleFirstNameChange,
  lastName,
  handleLastNameChange,
  phoneNumber,
  handlePhoneChange,
  location,
  handleLocationChange,
  email,
  handleEmailChange,
  role,
  handleRoleChange,
  linkedIn,
  handleLinkedInChange,
  schoolName,
  handleSchoolNameChange,
  schoolLocation,
  handleSchoolLocationChange,
  degree,
  handleDegreeChange,
  schoolStart,
  handleSchoolStartChange,
  schoolEnd,
  handleSchoolEndChange,
  company,
  handleCompanyChange,
  companyLocation,
  handleCompanyLocationChange,
  companyRole,
  handleCompanyRoleChange,
  companyStart,
  handleCompanyStartChange,
  companyEnd,
  handleCompanyEndChange,
  companyDescription,
  handleCompanyDescriptionChange,
  submit,
}) {
  return (
    <>
      <div className="edit-section">
        <InputEditPersonal
          firstName={firstName}
          handleFirstNameChange={handleFirstNameChange}
          lastName={lastName}
          handleLastNameChange={handleLastNameChange}
          phoneNumber={phoneNumber}
          handlePhoneChange={handlePhoneChange}
          location={location}
          handleLocationChange={handleLocationChange}
          email={email}
          handleEmailChange={handleEmailChange}
          role={role}
          handleRoleChange={handleRoleChange}
          linkedIn={linkedIn}
          handleLinkedInChange={handleLinkedInChange}
        />
        <InputEditEducation
          schoolName={schoolName}
          handleSchoolNameChange={handleSchoolNameChange}
          schoolLocation={schoolLocation}
          handleSchoolLocationChange={handleSchoolLocationChange}
          degree={degree}
          handleDegreeChange={handleDegreeChange}
          schoolStart={schoolStart}
          handleSchoolStartChange={handleSchoolStartChange}
          schoolEnd={schoolEnd}
          handleSchoolEndChange={handleSchoolEndChange}
          submitEducation={submit}
        />
        <InputEditWork
          company={company}
          handleCompanyChange={handleCompanyChange}
          companyLocation={companyLocation}
          handleCompanyLocationChange={handleCompanyLocationChange}
          companyRole={companyRole}
          handleCompanyRoleChange={handleCompanyRoleChange}
          companyStart={companyStart}
          handleCompanyStartChange={handleCompanyStartChange}
          companyEnd={companyEnd}
          handleCompanyEndChange={handleCompanyEndChange}
          companyDescription={companyDescription}
          handleCompanyDescriptionChange={handleCompanyDescriptionChange}
          submitWork={submit}
        />
      </div>
    </>
  );
}
