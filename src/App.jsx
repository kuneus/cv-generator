import { useState } from "react";
import "./styles/App.css";
import PreviewSection from "./components/previewSection";
import EditSection from "./components/editSection";

function App() {
  const [firstName, setFirstName] = useState("");
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  const [lastName, setLastName] = useState("");
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  let fullName = firstName + " " + lastName;

  const [phoneNumber, setPhoneNumber] = useState("");
  function handlePhoneChange(e) {
    setPhoneNumber(e.target.value);
  }

  const [location, setLocation] = useState("");
  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  const [email, setEmail] = useState("");
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  const [role, setRole] = useState("");
  function handleRoleChange(e) {
    setRole(e.target.value);
  }

  const [linkedIn, setLinkedIn] = useState("");
  function handleLinkedInChange(e) {
    setLinkedIn(e.target.value);
  }

  return (
    <div className="main-container">
      <EditSection
        firstName={firstName}
        handleFirstNameChange={handleFirstNameChange}
        lastName={lastName}
        handleLastNameChange={handleLastNameChange}
        phoneNumber={phoneNumber}
        handlePhoneChange={handlePhoneChange}
        location={location}
        handleLocationChange={handleLocationChange}
        email={email}
        handleEmailChange={handleEmailChange}
        role={role}
        handleRoleChange={handleRoleChange}
        linkedIn={linkedIn}
        handleLinkedInChange={handleLinkedInChange}
      />
      <PreviewSection
        fullName={fullName}
        previewPhone={phoneNumber}
        previewEmail={email}
        previewLocation={location}
        previewRole={role}
        previewLinkedIn={linkedIn}
      />
    </div>
  );
}

export default App;

/*

Create a new React project.
Think about how to structure your application into components. 
Your application should include:

- A section to add general information like name, 
    email and phone number.
- A section to add your educational experience (school name, 
    title of study and date of study)
- A section to add practical experience (company name, position 
    title, main responsibilities of your jobs, date from and until
    when you worked for that company)
- Be sure to include an edit and submit button for each section or 
    for the whole CV. The submit button should submit your form and 
    display the value of your input fields in HTML elements. The edit 
    button should add back (display) the input fields, with the
    previously displayed information as values. In those input 
    fields, you should be able to edit and resubmit the content. 
    You’re going to make heavy use of state and props, so make sure 
    you understood those concepts.
- Create a components directory under your src directory and add 
    your components.
- Include a styles directory under your src directory for your CSS 
    files. You’ll need to import these in the component files to use 
    them.
- Push the results and deploy them with any of the options mentioned below!


*/
