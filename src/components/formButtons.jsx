export default function FormButtons({
  save,
  cancel,
  deleteBtn,
  cancelId,
  deleteId,
}) {
  return (
    <div className="form-buttons-cont">
      <button type="submit" onClick={save} className="form-buttons">
        Save
      </button>
      <button
        type="button"
        onClick={cancel}
        className="form-buttons"
        id={cancelId}
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={deleteBtn}
        className="form-buttons"
        id={deleteId}
      >
        Delete
      </button>
    </div>
  );
}
