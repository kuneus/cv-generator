import InputField from "./inputField";
import FormButtons from "../formButtons";
import { v4 as uuidv4 } from "uuid";

function WorkList({ workArr, editWorkItem }) {
  return (
    <ul>
      {workArr.map((work) => (
        <li key={work.id}>
          <button className="work-item" id={work.id} onClick={editWorkItem}>
            {work[0]}
          </button>
        </li>
      ))}
    </ul>
  );
}

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
  addWork,
  handleCancel,
  workArr,
  editWorkItem,
  deleteWorkItem,
}) {
  return (
    <>
      <div className="card">
        <h1 className="card-title">Work</h1>
        <WorkList workArr={workArr} editWorkItem={editWorkItem} />
        <button
          style={{ display: workFormDisplay ? "none" : "block" }}
          onClick={addWork}
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
            cancel={handleCancel}
            deleteItem={deleteWorkItem}
            cancelId="work-cancel-btn"
            deleteId="work-delete-btn"
          />
        </form>
      </div>
    </>
  );
}

// create work form
