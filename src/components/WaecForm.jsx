import React, { useState } from 'react';
import logo from "../assets/analysthub.jpg";
import schoolOptions from './SchoolOptions';

const Form = () => {
  const [lga, setLga] = useState('');
  const [examYear, setExamYear] = useState('');
  const [gender, setGender] = useState('');
  const [subject1, setSubject1] = useState('');
  const [grade1, setGrade1] = useState('');
  const [subject2, setSubject2] = useState('');
  const [grade2, setGrade2] = useState('');
  const [subject3, setSubject3] = useState('');
  const [grade3, setGrade3] = useState('');
  const [subject4, setSubject4] = useState('');
  const [grade4, setGrade4] = useState('');
  const [subject5, setSubject5] = useState('');
  const [grade5, setGrade5] = useState('');
  const [subject6, setSubject6] = useState('');
  const [grade6, setGrade6] = useState('');
  const [subject7, setSubject7] = useState('');
  const [grade7, setGrade7] = useState('');
  const [subject8, setSubject8] = useState('');
  const [grade8, setGrade8] = useState('');

  const [school, setSchool] = useState('');
  const [seatNo, setSeatNo] = useState(''); // New state for seat number
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [submitting, setSubmitting] = useState(false);  
 

  const genderOptions = ['Male', 'Female', 'Others'];
  const examYearOptions = Array.from(new Array(11), (_, i) => 2013 + i);
  const LGAOptions = ['Yenagoa', 'Sagbama', 'Ogbia', 'Kolokuma/Opokuma', 'Nembe', 'Southern Ijaw', 'Brass', 'Evermore'];
  const subjectOptions = [ 'Mathematics' , 'English Language', 'Biology', 'Chemistry', 'Physics', 'Government','Economics', 'Home Economics', 'Civic Education', 'History', 'Further Mathematics', 'Commerce', 'Geography' , 'Marketing' , 'Financial Accounting'];
  //const schoolOptions = ['School1', 'School2', 'School3', 'School4', 'School5', 'School6', 'School7', 'School8'];
  const gradeOptions = ['A1', 'B2', 'B3', 'C4', 'C5', 'C6', 'D7', 'E8', 'F9'];
  const seatNoOptions = Array.from(new Array(600), (_, i) => (i + 1).toString().padStart(3, '0')); // Updated array for seat numbers



  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form fields
    if (!lga || !examYear || !gender || !subject1 || !grade1 || !school || !seatNo) {
      setFormError(true); // Set error if any field is empty
      setTimeout(() => {
        setFormError(false); // Remove error after 3 seconds
      }, 3000);
      return;
    }
      setSubmitting(true); // Set button text to "submitting..."
    // Form data
    const formData = new FormData();
    formData.append('lga', lga);
    formData.append('examYear', examYear);
    formData.append('gender', gender);
    formData.append('subject1', subject1);
    formData.append('grade1', grade1);
    formData.append('subject2', subject2);
    formData.append('grade2', grade2);
    formData.append('subject3', subject3);
    formData.append('grade3', grade3);
    formData.append('subject4', subject4);
    formData.append('grade4', grade4);
    formData.append('subject5', subject5);
    formData.append('grade5', grade5);
    formData.append('subject6', subject6);
    formData.append('grade6', grade6);
    formData.append('subject7', subject7);
    formData.append('grade7', grade7);
    formData.append('subject8', subject8);
    formData.append('grade8', grade8);
    formData.append('school', school);
    formData.append('seatNo', seatNo);
    
    console.log("Form Data:", Object.fromEntries(formData)); // Log form data

   
    fetch('https://script.google.com/macros/s/AKfycbxM1Bqe0qr74yWfM7sqzozk_GICGilurxLpirYh9TDCJhWOsgfngxRFj_-x9hvDbAHW/exec', {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
     
      .then(() => {
        setSubmitted(true);
        setSubmitting(false);
        setLga('');
        setExamYear('');
        setGender('');
        setSubject1('');
        setGrade1('');
        setSubject2('');
        setGrade2('');
        setSubject3('');
        setGrade3('');
        setSubject4('');
        setGrade4('');
        setSubject5('');
        setGrade5('');
        setSubject6('');
        setGrade6('');
        setSubject7('');
        setGrade7('');
        setSubject8('');
        setGrade8('');
        setSchool('');
        setSeatNo('');
        setTimeout(() => {
          setSubmitted(false); // Remove submitted message after 5 seconds
        }, 5000);
        console.log("Success: Form sent");
    })
    .catch((error) => {
      console.error("Error sending form:", error);
      console.log("Error: Form not sent");
      setSubmitting(false);
    });
};

  return (
    <div className="w-full  max-h-screen md:fixed">
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-mainColor to-slate-600 shadow-md rounded px-20 pt-6 pb-8 mb-4">
        <p className="mx-auto text-center mt-2 mb-2 font-bold uppercase font-serif text-2xl md:text-4xl">
            Student Performance Data Entry
        </p>
        <p className="font-sans font-semibold text-center mb-2"> Carefully enter the WAEC details of the candidate</p>
        {formError && <p className="text-red-500 text-center">Please fill in all fields.</p>}
        {submitted && <p className="text-green-500 text-center ">Submission  successful,  proceed with the next candidate </p>}  
        <div className="md:flex md:flex-wrap md:-mx-3 mb-2">
    <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="school">
        School Name:
      </label>
      <select
        value={school}
        onChange={(event) => setSchool(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select School</option>
        {schoolOptions.map((school) => (
            <option key={school} value={school}>
              {school}
            </option>
          ))}
      </select>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="seatNo">
        Seat No:
      </label>
      <select
        value={seatNo}
        onChange={(event) => setSeatNo(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Seat No</option>
        {seatNoOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
<div className="md:flex md:flex-wrap md:-mx-3">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lga">
        LGA:
      </label>
      <select
        value={lga}
        onChange={(event) => setLga(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select LGA</option>
        {LGAOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="examYear">
        Exam Year:
      </label>
      <select
        value={examYear}
        onChange={(event) => setExamYear(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Exam Year</option>
        {examYearOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="gender">
        Gender:
      </label>
      <select
        value={gender}
        onChange={(event) => setGender(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Gender</option>
        {genderOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>

  <div className="md:flex md:flex-wrap md:-mx-3 mt-2 mb-2">
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="subject">
        Subject 1:
      </label>
      <select
        value={subject1}
        onChange={(event) => setSubject1(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade1}
        onChange={(event) => setGrade1(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Grade</option>
        {gradeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="subject">
        Subject 2:
      </label>
      <select
        value={subject2}
        onChange={(event) => setSubject2(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade2}
        onChange={(event) => setGrade2(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Grade</option>
        {gradeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>

  <div className="md:flex md:flex-wrap md:-mx-3 mb-2">
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="subject">
        Subject 3:
      </label>
      <select
        value={subject3}
        onChange={(event) => setSubject3(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade3}
        onChange={(event) => setGrade3(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Grade</option>
        {gradeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>

    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="subject">
        Subject 4:
      </label>
      <select
        value={subject4}
        onChange={(event) => setSubject4(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade4}
        onChange={(event) => setGrade4(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Grade</option>
        {gradeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>

  <div className="md:flex md:flex-wrap md:-mx-3 mb-2">
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="subject">
        Subject 5:
      </label>
      <select
        value={subject5}
        onChange={(event) => setSubject5(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade5}
        onChange={(event) => setGrade5(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Grade</option>
        {gradeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="subject">
        Subject 6:
      </label>
      <select
        value={subject6}
        onChange={(event) => setSubject6(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade6}
        onChange={(event) => setGrade6(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Grade</option>
        {gradeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>

  <div className="md:flex md:flex-wrap md:-mx-3 mb-2">
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="subject">
        Subject 7:
      </label>
      <select
        value={subject7}
        onChange={(event) => setSubject7(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade7}
        onChange={(event) => setGrade7(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Grade</option>
        {gradeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="subject">
        Subject 8:
      </label>
      <select
        value={subject8}
        onChange={(event) => setSubject8(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade8}
        onChange={(event) => setGrade8(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Grade</option>
        {gradeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>

 
  <div className="flex flex-row justify-between -mx-3">
    <div className="w-full md:w-1/2 px-3">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={submitting || submitted}
      >
        {submitted ? 'Submitting...' : 'Submit'}
      </button>
    </div>
    <div className="md:w-1/4 font-bold text-sm text-white  text-center">
        <div className="flex flex-row items-end justify-evenly">
        <p>This Form is powered by: </p>
        <img src={logo} className=" ml-1 w-20  mx-auto rounded-lg" alt="logofor"/>
        </div>
        </div>
     </div>
   
</form>


    </div>
    
);
}
  
export default Form;


