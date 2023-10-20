export default function PreviewWork({
  previewCompanyName,
  previewCompanyLocation,
  previewCompanyRole,
  previewCompanyStart,
  previewCompanyEnd,
  previewCompanyDescription,
}) {
  return (
    <div className="preview-work">
      <h1 className="preview-title">Work Experience</h1>
      <div>{previewCompanyName}</div>
      <div>{previewCompanyLocation}</div>
      <div>{previewCompanyRole}</div>
      <div>{previewCompanyStart}</div>
      <div>{previewCompanyEnd}</div>
      <div>{previewCompanyDescription}</div>
    </div>
  );
}
