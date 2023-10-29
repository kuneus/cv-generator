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
  schoolName,
  schoolLocation,
  degree,
  schoolStart,
  schoolEnd,
  submitEducation,
  company,
  companyLocation,
  companyRole,
  companyStart,
  companyEnd,
  companyDescription,
  submitWork,
  handleChanges,
  educationArr,
  addEducation,
  educationFormDisplay,
  handleCancel,
  workFormDisplay,
  addWork,
  workArr,
  editEducationItem,
  editWorkItem,
  deleteItem,
}) {
  return (
    <div className="right-container">
      <div className="edit-section">
        <InputEditPersonal
          firstName={firstName}
          lastName={lastName}
          phoneNumber={phoneNumber}
          location={location}
          email={email}
          role={role}
          handleChanges={handleChanges}
        />
        <InputEditEducation
          addEducation={addEducation}
          educationFormDisplay={educationFormDisplay}
          schoolName={schoolName}
          schoolLocation={schoolLocation}
          degree={degree}
          schoolStart={schoolStart}
          schoolEnd={schoolEnd}
          submitEducation={submitEducation}
          handleChanges={handleChanges}
          handleCancel={handleCancel}
          educationArr={educationArr}
          editEducationItem={editEducationItem}
          deleteEducationItem={deleteItem}
        />
        <InputEditWork
          addWork={addWork}
          workFormDisplay={workFormDisplay}
          company={company}
          companyLocation={companyLocation}
          companyRole={companyRole}
          companyStart={companyStart}
          companyEnd={companyEnd}
          companyDescription={companyDescription}
          submitWork={submitWork}
          handleChanges={handleChanges}
          handleCancel={handleCancel}
          workArr={workArr}
          editWorkItem={editWorkItem}
          deleteWorkItem={deleteItem}
        />
      </div>
    </div>
  );
}
