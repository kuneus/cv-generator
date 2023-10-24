import InputField from "./inputField";
import FormButtons from "../formButtons";

export default function InputEditWork({
  company,
  companyLocation,
  companyRole,
  companyStart,
  companyEnd,
  companyDescription,
  submitWork,
  handleChanges,
  workFormDisplay,
  handleWorkFormDisplay,
  handleCancel,
}) {
  return (
    <>
      <div className="card">
        <h1 className="card-title">Work</h1>
        {/* <WorkList educationArr={workArr} /> */}
        <button
          style={{ display: workFormDisplay ? "none" : "block" }}
          onClick={handleWorkFormDisplay}
        >
          Add Work
        </button>
        <form
          onSubmit={submitWork}
          id="work-form"
          style={{ display: workFormDisplay ? "block" : "none" }}
        >
          <InputField
            id="company-name-input"
            value={company}
            onChange={handleChanges}
            label="Company Name"
          />
          <InputField
            id="company-location-input"
            value={companyLocation}
            onChange={handleChanges}
            label="City, State, Country"
          />
          <InputField
            id="company-role-input"
            value={companyRole}
            onChange={handleChanges}
            label="Role at Company"
          />
          <InputField
            id="company-start-input"
            value={companyStart}
            onChange={handleChanges}
            label="Start Month/Year"
          />
          <InputField
            id="company-end-input"
            value={companyEnd}
            onChange={handleChanges}
            label="End Month/Year"
          />
          <div>
            <label htmlFor="company-description-input">Description</label>
            <textarea
              id="company-description-input"
              value={companyDescription}
              onChange={handleChanges}
            />
          </div>
          <FormButtons
            cancelId="work-cancel-btn"
            cancel={handleCancel}
            deleteId="work-delete-btn"
          />
        </form>
      </div>
    </>
  );
}

// create work form
