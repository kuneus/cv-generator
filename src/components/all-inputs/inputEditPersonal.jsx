import InputField from "./inputField";

export default function InputEditPersonal({
  firstName,
  handleFirstNameChange,
  lastName,
  handleLastNameChange,
  phoneNumber,
  handlePhoneChange,
  location,
  handleLocationChange,
  email,
  handleEmailChange,
  role,
  handleRoleChange,
  linkedIn,
  handleLinkedInChange,
}) {
  return (
    <>
      <div className="card">
        <h1 className="card-title">Personal</h1>
        <ul>
          <InputField
            id="fName-input"
            value={firstName}
            onChange={handleFirstNameChange}
            label="First Name"
          />
          <InputField
            id="lName-input"
            value={lastName}
            onChange={handleLastNameChange}
            label="Last Name"
          />
          <InputField
            id="phone-input"
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            label="Phone Number"
          />
          <InputField
            id="location-input"
            value={location}
            onChange={handleLocationChange}
            label="Current Location"
          />
          <InputField
            id="email-input"
            type="email"
            value={email}
            onChange={handleEmailChange}
            label="Email"
          />
          <InputField
            id="role-input"
            value={role}
            onChange={handleRoleChange}
            label="Current Role"
          />
          <InputField
            id="linkedIn-Input"
            value={linkedIn}
            onChange={handleLinkedInChange}
            label="LinkedIn URL"
          />
        </ul>
      </div>
    </>
  );
}
