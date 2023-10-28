import { useState } from "react";
import "./styles/App.css";
import PreviewSection from "./components/previewSection";
import EditSection from "./components/editSection";
import { v4 as uuidv4 } from "uuid";

function App() {
  // personal section
  const [firstName, setFirstName] = useState("Anthony");
  const [lastName, setLastName] = useState("Stark");
  let fullName = firstName + " " + lastName;
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [location, setLocation] = useState("New York, New York, USA");
  const [email, setEmail] = useState("i.am.ironman@gmail.com");
  const [role, setRole] = useState(
    "Genius, billionaire, playboy, philanthropist",
  );
  // school section
  const [schoolName, setSchoolName] = useState(
    "Massachussetts Institute of Technology",
  );
  const [schoolLocation, setSchoolLocation] = useState("Cambridge, MA");
  const [degree, setDegree] = useState(
    "Bachelor's of Science in Electrical Engineering and Physics",
  );
  const [schoolStart, setSchoolStart] = useState("Sept 1984");
  const [schoolEnd, setSchoolEnd] = useState("May 1987");
  // work section
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

  // arrays to keep track of education and work inputs
  const [educationArr, setEducationArr] = useState([]);
  const [workArr, setWorkArr] = useState([]);

  // new work or education form submitted
  function handleSubmission(type, arr) {
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
      handleEducationFormDisplay();
    } else {
      setCompany("");
      setCompanyLocation("");
      setCompanyRole("");
      setCompanyStart("");
      setCompanyEnd("");
      setCompanyDescription("");
      handleWorkFormDisplay();
    }
  };

  // new work or education item is submitted
  function submit(e) {
    e.preventDefault();

    let temp = [];
    for (let i = 0; i < e.target.length; i++) {
      e.target[i].className !== "form-buttons" && temp.push(e.target[i].value);
    }
    let submittedObj = { ...temp };
    submittedObj.id = uuidv4();
    if (submittedObj[0] !== "") {
      handleSubmission(e.target.id, submittedObj);
    }

    resetForm(e.target.id);
  }

  // toggle display for education or work form
  const [educationFormDisplay, setEducationFormDisplay] = useState(true);
  const [workFormDisplay, setWorkFormDisplay] = useState(true);
  function handleEducationFormDisplay() {
    educationFormDisplay
      ? setEducationFormDisplay(false)
      : setEducationFormDisplay(true);
  }
  function handleWorkFormDisplay() {
    workFormDisplay ? setWorkFormDisplay(false) : setWorkFormDisplay(true);
  }

  // toggle between saving existing item or adding new item
  const [saveOrSubmitEducation, setSaveOrSubmitEducation] = useState("submit");
  const [saveOrSubmitWork, setSaveOrSubmitWork] = useState("submit");

  // add education or work onClick event
  function addEducation() {
    setSaveOrSubmitEducation("submit");
    handleEducationFormDisplay();
  }
  function addWork() {
    setSaveOrSubmitWork("submit");
    handleWorkFormDisplay();
  }

  function handleCancel(e) {
    let targetForm;
    // determine which form was clicked
    e.target.id === "education-cancel-btn"
      ? (targetForm = "education-form")
      : (targetForm = "work-form");

    resetForm(targetForm);
  }

  // populate input form with obj info
  function populateEducationInput(obj) {
    setSchoolName(obj[0]);
    setSchoolLocation(obj[1]);
    setDegree(obj[2]);
    setSchoolStart(obj[3]);
    setSchoolEnd(obj[4]);
  }
  function populateWorkInput(obj) {
    setCompany(obj[0]);
    setCompanyLocation(obj[1]);
    setCompanyRole(obj[2]);
    setCompanyStart(obj[3]);
    setCompanyEnd(obj[4]);
    setCompanyDescription(obj[5]);
  }

  // store selected item's id for later finding
  const [currentEducationItemId, setCurrentEducationItemId] = useState();
  const [currentWorkItemId, setCurrentWorkItemId] = useState();

  // edit work or education item
  function editItem(e) {
    let itemId = e.target.id;

    let selectedObj;

    // first, display respective form input
    // then find matching obj in respective array
    // then populate form input with obj values
    if (e.target.className === "education-item") {
      setEducationFormDisplay(true);
      educationArr.forEach(
        (education) => education.id === itemId && (selectedObj = education),
      );
      populateEducationInput(selectedObj);
      setCurrentEducationItemId(itemId);
      setSaveOrSubmitEducation("save");
    } else {
      setWorkFormDisplay(true);
      workArr.forEach((work) => work.id === itemId && (selectedObj = work));
      populateWorkInput(selectedObj);
      setCurrentWorkItemId(itemId);
      setSaveOrSubmitWork("save");
    }
  }

  // when existing item is saved
  function saveItem(e) {
    e.preventDefault();
    console.log("item is saved!");

    let temp = [];
    for (let i = 0; i < e.target.length; i++) {
      e.target[i].className !== "form-buttons" && temp.push(e.target[i].value);
    }
    let submittedObj = { ...temp };

    // find matching object then update original object
    if (e.target.id === "education-form") {
      educationArr.forEach(
        (item) =>
          item.id === currentEducationItemId &&
          updateEducationObj(item, submittedObj),
      );
    } else {
      workArr.forEach(
        (item) =>
          item.id === currentWorkItemId && updateWorkObj(item, submittedObj),
      );
    }
    resetForm(e.target.id);
  }

  // update object in education or work array
  function updateEducationObj(obj, updatedInputObj) {
    obj[0] = updatedInputObj[0];
    obj[1] = updatedInputObj[1];
    obj[2] = updatedInputObj[2];
    obj[3] = updatedInputObj[3];
    obj[4] = updatedInputObj[4];
  }

  function updateWorkObj(obj, updatedInputObj) {
    obj[0] = updatedInputObj[0];
    obj[1] = updatedInputObj[1];
    obj[2] = updatedInputObj[2];
    obj[3] = updatedInputObj[3];
    obj[4] = updatedInputObj[4];
    obj[5] = updatedInputObj[5];
  }

  const schoolInfo = {
    schoolName,
    schoolLocation,
    degree,
    schoolStart,
    schoolEnd,
  };

  const workInfo = {
    company,
    companyLocation,
    companyRole,
    companyStart,
    companyEnd,
    companyDescription,
  };

  // delete selected item
  function deleteItem(e) {
    let targetForm;

    console.log(e.target.id);
    if (e.target.id === "education-delete-btn") {
      targetForm = "education-form";
      // if in edit item mode, find item in array and delete it
      if (saveOrSubmitEducation === "save") {
        for (let i = 0; i < educationArr.length; i++) {
          if (educationArr[i].id === currentEducationItemId) {
            educationArr.splice(i, 1);
            break;
          }
        }
      }
    } else {
      targetForm = "work-form";
      if (saveOrSubmitWork === "save") {
        for (let i = 0; i < workArr.length; i++) {
          if (workArr[i].id === currentWorkItemId) {
            workArr.splice(i, 1);
            break;
          }
        }
      }
    }

    resetForm(targetForm);
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
        schoolName={schoolName}
        schoolLocation={schoolLocation}
        degree={degree}
        schoolStart={schoolStart}
        schoolEnd={schoolEnd}
        educationArr={educationArr}
        editEducationItem={editItem}
        educationFormDisplay={educationFormDisplay}
        addEducation={addEducation}
        submitEducation={saveOrSubmitEducation === "submit" ? submit : saveItem}
        company={company}
        companyLocation={companyLocation}
        companyRole={companyRole}
        companyStart={companyStart}
        companyEnd={companyEnd}
        companyDescription={companyDescription}
        workFormDisplay={workFormDisplay}
        addWork={addWork}
        workArr={workArr}
        submitWork={saveOrSubmitWork === "submit" ? submit : saveItem}
        handleChanges={handleAllChanges}
        handleCancel={handleCancel}
        editWorkItem={editItem}
        deleteItem={deleteItem}
      />
      <PreviewSection
        fullName={fullName}
        previewPhone={phoneNumber}
        previewEmail={email}
        previewLocation={location}
        previewRole={role}
        schoolInfo={saveOrSubmitEducation === "submit" && schoolInfo}
        workInfo={saveOrSubmitWork === "submit" && workInfo}
        educationArr={educationArr}
        workArr={workArr}
      />
    </div>
  );
}

export default App;
