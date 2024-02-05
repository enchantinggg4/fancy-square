// Speed param measured in degrees/second
// Radius measured in pixels

function Field({ speed, radius }) {
  return (
    <div className="Field">
      <div className="Square" />
      <div className="Point" />
    </div>
  );
}

export default Field;
