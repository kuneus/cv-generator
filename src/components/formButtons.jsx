export default function FormButtons({ save, cancel, deleteBtn }) {
  return (
    <div className="form-buttons-cont">
      <button type="submit" onClick={save} className="form-buttons">
        Save
      </button>
      <button type="button" onClick={cancel} className="form-buttons">
        Cancel
      </button>
      <button type="button" onClick={deleteBtn} className="form-buttons">
        Delete
      </button>
    </div>
  );
}
