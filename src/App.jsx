import { useState } from "react";
import "./styles/App.css";
import PreviewSection from "./components/previewSection";
import EditSection from "./components/editSection";

// let educationArr = [];

// let workArr = [];

const createInfo = ([...items]) => {
  return { ...items };
};

function App() {
  const [firstName, setFirstName] = useState("Anthony");
  const [lastName, setLastName] = useState("Stark");
  let fullName = firstName + " " + lastName;
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [location, setLocation] = useState("New York, New York, USA");
  const [email, setEmail] = useState("i.am.ironman@gmail.com");
  const [role, setRole] = useState(
    "Genius, billionaire, playboy, philanthropist",
  );
  const [linkedIn, setLinkedIn] = useState("linkedIn.com/tony.stark");
  const [schoolName, setSchoolName] = useState(
    "Massachussetts Institute of Technology",
  );
  const [schoolLocation, setSchoolLocation] = useState("Cambridge, MA");
  const [degree, setDegree] = useState(
    "Bachelor's of Science in Electrical Engineering and Physics",
  );
  const [schoolStart, setSchoolStart] = useState("Sept 1984");
  const [schoolEnd, setSchoolEnd] = useState("May 1987");
  const [company, setCompany] = useState("Stark Industries");
  const [companyLocation, setCompanyLocation] = useState(
    "New York, New York, USA",
  );
  const [companyRole, setCompanyRole] = useState("CEO");
  const [companyStart, setCompanyStart] = useState("Dec 1991");
  const [companyEnd, setCompanyEnd] = useState("2011");
  const [companyDescription, setCompanyDescription] = useState(
    "Created the most innovative weapon technologies in history.",
  );

  function handleAllChanges(e) {
    switch (e.target.id) {
      case "fName-input":
        setFirstName(e.target.value);
        break;
      case "lName-input":
        setLastName(e.target.value);
        break;
      case "phone-input":
        setPhoneNumber(e.target.value);
        break;
      case "email-input":
        setEmail(e.target.value);
        break;
      case "location-input":
        setLocation(e.target.value);
        break;
      case "role-input":
        setRole(e.target.value);
        break;
      case "linkedIn-input":
        setLinkedIn(e.target.value);
        break;
      case "school-name-input":
        setSchoolName(e.target.value);
        break;
      case "school-location-input":
        setSchoolLocation(e.target.value);
        break;
      case "school-degree-input":
        setDegree(e.target.value);
        break;
      case "school-start-input":
        setSchoolStart(e.target.value);
        break;
      case "school-end-input":
        setSchoolEnd(e.target.value);
        break;
      case "company-name-input":
        setCompany(e.target.value);
        break;
      case "company-location-input":
        setCompanyLocation(e.target.value);
        break;
      case "company-role-input":
        setCompanyRole(e.target.value);
        break;
      case "company-start-input":
        setCompanyStart(e.target.value);
        break;
      case "company-end-input":
        setCompanyEnd(e.target.value);
        break;
      case "company-description-input":
        setCompanyDescription(e.target.value);
        break;
    }
  }

  const [educationArr, setEducationArr] = useState([]);
  const [workArr, setWorkArr] = useState([]);
  function handleNewObj(type, arr) {
    type === "education-form"
      ? setEducationArr(educationArr.concat(arr))
      : setWorkArr(workArr.concat(arr));
  }

  const resetForm = (form) => {
    if (form === "education-form") {
      setSchoolName("");
      setSchoolLocation("");
      setDegree("");
      setSchoolStart("");
      setSchoolEnd("");
    } else {
      setCompany("");
      setCompanyLocation("");
      setCompanyRole("");
      setCompanyStart("");
      setCompanyEnd("");
      setCompanyDescription("");
    }
  };

  function submit(e) {
    e.preventDefault();

    let temp = [];
    for (let i = 0; i < e.target.length; i++) {
      e.target[i].className !== "form-buttons" && temp.push(e.target[i].value);
    }
    let submittedObj = createInfo(temp);

    handleNewObj(e.target.id, submittedObj);

    resetForm(e.target.id);
  }

  return (
    <div className="main-container">
      <EditSection
        firstName={firstName}
        lastName={lastName}
        phoneNumber={phoneNumber}
        location={location}
        email={email}
        role={role}
        linkedIn={linkedIn}
        handleChanges={handleAllChanges}
        schoolName={schoolName}
        schoolLocation={schoolLocation}
        degree={degree}
        schoolStart={schoolStart}
        schoolEnd={schoolEnd}
        company={company}
        companyLocation={companyLocation}
        companyRole={companyRole}
        companyStart={companyStart}
        companyEnd={companyEnd}
        companyDescription={companyDescription}
        submit={submit}
      />
      <PreviewSection
        fullName={fullName}
        previewPhone={phoneNumber}
        previewEmail={email}
        previewLocation={location}
        previewRole={role}
        previewLinkedIn={linkedIn}
        previewSchoolName={schoolName}
        previewSchoolLocation={schoolLocation}
        previewDegree={degree}
        previewSchoolStart={schoolStart}
        previewSchoolEnd={schoolEnd}
        previewCompanyName={company}
        previewCompanyLocation={companyLocation}
        previewCompanyRole={companyRole}
        previewCompanyStart={companyStart}
        previewCompanyEnd={companyEnd}
        previewCompanyDescription={companyDescription}
        educationArr={educationArr}
        workArr={workArr}
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
