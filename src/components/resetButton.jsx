export default function ResetButton({ handleResetAll }) {
  return (
    <button onClick={handleResetAll} id="reset-button">
      Reset All
    </button>
  );
}
