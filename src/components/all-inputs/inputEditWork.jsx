import InputField from "./inputField";
import FormButtons from "../formButtons";

export default function InputEditWork({
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
  submitWork,
}) {
  return (
    <>
      <div className="card">
        <h1 className="card-title">Work</h1>
        <form onSubmit={submitWork} id="work-form">
          <InputField
            id="company-name-input"
            value={company}
            onChange={handleCompanyChange}
            label="Company Name"
          />
          <InputField
            id="company-location-input"
            value={companyLocation}
            onChange={handleCompanyLocationChange}
            label="City, State, Country"
          />
          <InputField
            id="company-role-input"
            value={companyRole}
            onChange={handleCompanyRoleChange}
            label="Role at Company"
          />
          <InputField
            id="company-start-input"
            value={companyStart}
            onChange={handleCompanyStartChange}
            label="Start Month/Year"
          />
          <InputField
            id="company-end-input"
            value={companyEnd}
            onChange={handleCompanyEndChange}
            label="End Month/Year"
          />
          <div>
            <label htmlFor="company-description-input">Description</label>
            <textarea
              id="company-description-input"
              value={companyDescription}
              onChange={handleCompanyDescriptionChange}
            />
          </div>
          <FormButtons />
        </form>
      </div>
    </>
  );
}

// create work form
