import "../styles/editSection.css";
import InputEditPersonal from "./all-inputs/inputEditPersonal";
import InputEditEducation from "./all-inputs/inputEditEducation";
import InputEditWork from "./all-inputs/inputEditWork";

export default function EditSection({
  firstName,
  lastName,
  phoneNumber,
  location,
  email,
  role,
  linkedIn,
  schoolName,
  schoolLocation,
  degree,
  schoolStart,
  schoolEnd,
  company,
  companyLocation,
  companyRole,
  companyStart,
  companyEnd,
  companyDescription,
  submit,
  handleChanges,
  educationArr,
  educationFormDisplay,
  displayForm,
  handleCancel,
}) {
  return (
    <>
      <div className="edit-section">
        <InputEditPersonal
          firstName={firstName}
          lastName={lastName}
          phoneNumber={phoneNumber}
          location={location}
          email={email}
          role={role}
          linkedIn={linkedIn}
          handleChanges={handleChanges}
        />
        <InputEditEducation
          educationFormDisplay={educationFormDisplay}
          displayForm={displayForm}
          schoolName={schoolName}
          schoolLocation={schoolLocation}
          degree={degree}
          schoolStart={schoolStart}
          schoolEnd={schoolEnd}
          submitEducation={submit}
          handleChanges={handleChanges}
          educationArr={educationArr}
          handleCancel={handleCancel}
        />
        <InputEditWork
          company={company}
          companyLocation={companyLocation}
          companyRole={companyRole}
          companyStart={companyStart}
          companyEnd={companyEnd}
          companyDescription={companyDescription}
          submitWork={submit}
          handleChanges={handleChanges}
        />
      </div>
    </>
  );
}
