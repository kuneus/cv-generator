import InputField from "./inputField";

export default function InputEditPersonal({
  firstName,
  lastName,
  phoneNumber,
  location,
  email,
  role,
  linkedIn,
  handleChanges,
}) {
  return (
    <>
      <div className="card">
        <h1 className="card-title">Personal</h1>
        <ul>
          <InputField
            id="fName-input"
            value={firstName}
            onChange={handleChanges}
            label="First Name"
          />
          <InputField
            id="lName-input"
            value={lastName}
            onChange={handleChanges}
            label="Last Name"
          />
          <InputField
            id="phone-input"
            type="tel"
            value={phoneNumber}
            onChange={handleChanges}
            label="Phone Number"
          />
          <InputField
            id="location-input"
            value={location}
            onChange={handleChanges}
            label="Current Location"
          />
          <InputField
            id="email-input"
            type="email"
            value={email}
            onChange={handleChanges}
            label="Email"
          />
          <InputField
            id="role-input"
            value={role}
            onChange={handleChanges}
            label="Current Role"
          />
          <InputField
            id="linkedIn-input"
            value={linkedIn}
            onChange={handleChanges}
            label="LinkedIn URL"
          />
        </ul>
      </div>
    </>
  );
}
