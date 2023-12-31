import "../../styles/previewPersonal.css";

export default function PreviewPersonalInfo({
  fullName,
  previewPhone,
  previewEmail,
  previewLocation,
  previewRole,
  previewLinkedIn,
}) {
  return (
    <div className="preview-personal-info preview-card">
      <h1 className="preview-title">{fullName}</h1>
      <div>{previewPhone}</div>
      <div>{previewEmail}</div>
      <div>{previewLocation}</div>
      <div>{previewRole}</div>
      <div>{previewLinkedIn}</div>
    </div>
  );
}
