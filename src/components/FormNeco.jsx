import React, { useState} from 'react';
import logo from "../assets/analysthub.jpg";
import schoolData from './SchoolData';
import enumeratorData from './EnumeratorData';


const Form = () => {
  const [schoolCode, setSchoolCode] = useState('');
  const [enumeratorCode, setEnumeratorCode] = useState('');
  const [enumerator, setEnumerator] = useState('');
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
  const [subject9, setSubject9] = useState('');
  const [grade9, setGrade9] = useState('');
  const [school, setSchool] = useState('');
  const [seatNo, setSeatNo] = useState(''); // New state for seat number
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [submitting, setSubmitting] = useState(false);  


 

  const genderOptions = ['Male', 'Female', 'Others'];
  const examYearOptions = Array.from(new Array(11), (_, i) => 2013 + i);
  //const LGAOptions = ['Yenagoa', 'Sagbama', 'Ogbia', 'Kolokuma/Opokuma', 'Nembe', 'Southern Ijaw', 'Brass', 'Evermore'];
  const subjectOptions = [ 'Mathematics' , 'English Language', 'Biology', 'Chemistry', 'Physics', 'Government','Economics', 'Home Economics', 'Civic Education', 'History', 'Further Mathematics', 'Commerce', 'Geography' , 'Marketing' , 'Financial Accounting', 'Agricultural Science', 'Fishery', 'Lit in English', 'Computer', 'CRS', 'Book Keeping', 'Electro', 'Animal Husbandry', 'Mining', 'Data Processing'
  ,' Health Education', 'Physical Education', 'Food and Nutrition', 'French', ' Home Management', 'Music', 'Technical Drawing', 'Virtual Art', 'Health Science' , 'Subject not listed'
  ];
  //const schoolOptions = ['School1', 'School2', 'School3', 'School4', 'School5', 'School6', 'School7', 'School8'];
  const gradeOptions = ['A1', 'B2', 'B3', 'C4', 'C5', 'C6', 'D7', 'E8', 'F9', 'Pending (*)', 'Cancel (X)', 'Absent (**)', 'NR (No Result)'];
  const seatNoOptions = Array.from(new Array(600), (_, i) => (i + 1).toString().padStart(3, '0')); // Updated array for seat numbers
  const schoolCodeOptions = Array.from(new Array(216), (_, i) => (i + 1).toString().padStart(3, '0')); // Updated array for seat numbers
  //const enumeratorCodeOptions = Array.from(new Array(32), (_, i) => 'EN' + (i + 1).toString().padStart(2, '0'));
  const enumeratorCodeOptions = Array.from(new Array(37), (_, i) => {
    const num = i + 1;
    if (![1, 2, 3, 11, 20, 25].includes(num)) {
    return 'EN' + num.toString().padStart(2, '0');
    }
    });
    



 //schoolcode handler
 const handleSchoolCodeChange = (event) => {
    const code = event.target.value;
    setSchoolCode(code);

    if (schoolData[code]) {
      setSchool(schoolData[code].name);
      setLga(schoolData[code].lga);
    } else {
      setSchool('');
      setLga('');
    }
  };
 
   //enumerator handler
 const handleEnumeratorCodeChange = (event) => {
  const code = event.target.value;
  setEnumeratorCode(code);

  if (enumeratorData[code]) {
    setEnumerator(enumeratorData[code].name);
  } else {
    setEnumerator(''); 
  }
};



  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form fields
    if (!enumerator || !schoolCode || !lga || !examYear || !gender || !subject1 || !grade1 || !subject2 || !grade2 || !subject3 || !grade3 || !subject4 || !grade4 || !subject5 || !grade5 || !subject6 || !grade6 || !subject7 || !grade7 || !school || !seatNo) {
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
    formData.append('subject9', subject9);
    formData.append('grade9', grade9);
    formData.append('school', school);
    formData.append('seatNo', seatNo);
    formData.append('enumerator', enumerator);
    
    console.log("Form Data:", Object.fromEntries(formData)); // Log form data

   
    fetch('https://script.google.com/macros/s/AKfycbwYLE7IMg6U9zEnouW_sQel9cGz50koV2mq7zb5xVJ03JUjjit-HoJsRT1Ss1REBLrM/exec', {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
     
      .then(() => {
        setSubmitted(true);
        setSubmitting(false);
        setSchoolCode('');
        setEnumeratorCode('');
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
        setSubject9('');
        setGrade9('');
        setSchool('');
        setSeatNo('');
        setEnumerator('');
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
    <div className="w-full  h-screen lg:fixed">
    <form onSubmit={handleSubmit} className="md:pb-20 bg-gradient-to-tl from-mainColor to-slate-600 shadow-md rounded px-8 md:px-20 pt-6 pb-8 mb-4">
        <p className="mx-auto text-slate-200 text-center mt-2 mb-2 font-bold uppercase font-serif text-xl md:text-2xl lg:text-4xl">
            Student Performance Data Entry
        </p>
        
        { formError ? <p className="text-red-500 text-center">Please fill in all fields.</p> : <p className="font-sans font-semibold text-center mb-4 text-slate-200"> Carefully enter the NECO details of the candidate</p>}
        {submitted && <p className="text-green-500 text-center ">Submission  successful,  proceed with the next candidate </p>}  
        <div className="flex flex-wrap md:flex md:flex-wrap md:-mx-3 mb-4">
     {/* School Code */}
     <div className="w-2/3 md:w-1/6 px-3 mb-6 md:mb-0 justify-center">
          <label className="block uppercase tracking-wide text-slate-200 text-xs font-bold mb-2" htmlFor="schoolCode">
            School Code:
          </label>
          <div className='flex flex-row items-center space-x-1'>
          <span className='text-slate-200 text-sm'>BY/PUBL/WAEC/</span>
          
          <select
            type="text"
            value={schoolCode}
            onChange={handleSchoolCodeChange}
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
        <option value="">#</option>
        {schoolCodeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
          </div>
        
    </div>
        {/* School Name */}
        <div className="w-full md:w-3/6 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-slate-200 text-xs font-bold mb-2" htmlFor="schoolName">
            School Name:
          </label>
          <input
            type="text"
            value={school}
            readOnly
            className=" block w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div className="w-2/3 md:w-1/6 px-3 mb-6 md:mb-0 justify-center">
          <label className="block uppercase tracking-wide text-slate-200 text-xs font-bold mb-2" htmlFor="schoolCode">
            Enumerator Code:
          </label>
          <div className='items-center space-x-1'>
          <select
            type="text"
            value={enumeratorCode}
            onChange={handleEnumeratorCodeChange}
            className="block appearance-none w-2/3 bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
        <option value="">EN</option>
        {enumeratorCodeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
          </div> 
    </div>
    <div className="w-1/2 md:w-1/6 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-slate-200 text-xs font-bold mb-2" htmlFor="enum">
            Name:
          </label>
          <input
            type="text"
            value={enumerator}
            readOnly
            className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
      </div>
      <div className="flex flex-wrap md:flex md:flex-wrap md:-mx-3 md:mb-12">
     {/* LGA */}
     <div className="w-1/2 md:w-1/4 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-slate-200 text-xs font-bold mb-2" htmlFor="lga">
            LGA:
          </label>
          <input
            type="text"
            value={lga}
            readOnly
            className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
     {/* SEAT NO */}
    <div className="w-1/2 md:w-1/4 px-3 mb-6 md:mb-0 ">
      <label className="block uppercase tracking-wide text-slate-200 text-xs font-bold mb-2" htmlFor="seatNo">
        Seat No:
      </label>
      <select
        value={seatNo}
        onChange={(event) => setSeatNo(event.target.value)}
        className=" block appearance-none w-full md:w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
      >
        <option value="">Select Seat No</option>
        {seatNoOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-1/2 md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-slate-200 text-xs font-bold mb-2" htmlFor="examYear">
        Exam Year:
      </label>
      <select
        value={examYear}
        onChange={(event) => setExamYear(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">Select Exam Year</option>
        {examYearOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-1/2 md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-slate-200 text-xs font-bold mb-2" htmlFor="gender">
        Gender:
      </label>
      <select
        value={gender}
        onChange={(event) => setGender(event.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
  <div className='md:pl-12 md:pt-4 md:pb-4 border-2 border-slate-200 bg-gradient-to-tr from-slate-300 to-slate-100 rounded-lg px-4 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] mx-auto'>
  
  <div className="flex flex-wrap md:flex md:flex-wrap md:-mx-3 mt-2 mb-2 ">
    <div className="w-2/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="subject">
        Subject 1:
      </label>
      <select
        value={subject1}
        onChange={(event) => setSubject1(event.target.value)}
        className="block appearance-none w-full bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-1/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade1}
        onChange={(event) => setGrade1(event.target.value)}
        className="block appearance-none w-full md:w-2/3 bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
      >
        <option value="">Select Grade</option>
        {gradeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-2/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="subject">
        Subject 2:
      </label>
      <select
        value={subject2}
        onChange={(event) => setSubject2(event.target.value)}
        className="block appearance-none w-full bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-1/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade2}
        onChange={(event) => setGrade2(event.target.value)}
        className="block appearance-none w-full md:w-2/3 bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
      >
        <option value="">Select Grade</option>
        {gradeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>

    {/**subject 3 testing */}
    <div className="w-2/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="subject">
        Subject 3:
      </label>
      <select
        value={subject3}
        onChange={(event) => setSubject3(event.target.value)}
        className="block appearance-none w-full bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-1/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade3}
        onChange={(event) => setGrade3(event.target.value)}
        className="block appearance-none w-full md:w-2/3 bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
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

  <div className="flex flex-wrap md:flex md:flex-wrap md:-mx-3 mb-2">
    <div className="w-2/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="subject">
        Subject 4:
      </label>
      <select
        value={subject4}
        onChange={(event) => setSubject4(event.target.value)}
        className="block appearance-none w-full bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-1/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade4}
        onChange={(event) => setGrade4(event.target.value)}
        className="block appearance-none w-full md:w-2/3 bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
      >
        <option value="">Select Grade</option>
        {gradeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  
    <div className="w-2/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="subject">
        Subject 5:
      </label>
      <select
        value={subject5}
        onChange={(event) => setSubject5(event.target.value)}
        className="block appearance-none w-full bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-1/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade5}
        onChange={(event) => setGrade5(event.target.value)}
        className="block appearance-none w-full md:w-2/3 bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
      >
        <option value="">Select Grade</option>
        {gradeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-2/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="subject">
        Subject 6:
      </label>
      <select
        value={subject6}
        onChange={(event) => setSubject6(event.target.value)}
        className="block appearance-none w-full bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-1/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade6}
        onChange={(event) => setGrade6(event.target.value)}
        className="block appearance-none w-full md:w-2/3 bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
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

  <div className="flex flex-wrap md:flex md:flex-wrap md:-mx-3 mb-2">
    <div className="w-2/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="subject">
        Subject 7:
      </label>
      <select
        value={subject7}
        onChange={(event) => setSubject7(event.target.value)}
        className="block appearance-none w-full bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-1/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade7}
        onChange={(event) => setGrade7(event.target.value)}
        className="block appearance-none w-full md:w-2/3 bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
      >
        <option value="">Select Grade</option>
        {gradeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-2/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="subject">
        Subject 8:
      </label>
      <select
        value={subject8}
        onChange={(event) => setSubject8(event.target.value)}
        className="block appearance-none w-full bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-1/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade8}
        onChange={(event) => setGrade8(event.target.value)}
        className="block appearance-none w-full md:w-2/3 bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
      >
        <option value="">Select Grade</option>
        {gradeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>

    {/**subject 9 */}
    <div className="w-2/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="subject">
        Subject 9:
      </label>
      <select
        value={subject9}
        onChange={(event) => setSubject9(event.target.value)}
        className="block appearance-none w-full bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
      >
        <option value="">Select Subject</option>
        {subjectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="w-1/3 md:w-1/6 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-mainColor text-xs font-bold mb-2" htmlFor="grade">
        Grade:
      </label>
      <select
        value={grade9}
        onChange={(event) => setGrade9(event.target.value)}
        className="block appearance-none w-full md:w-2/3 bg-mainColor border border-gray-200 text-slate-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-mainColor focus:border-gray-500"
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
</div>
 
  <div className="mt-4 flex flex-row justify-between -mx-3">
    <div className="w-full md:w-1/2 px-3">
      <button
        type="submit"
        className={`${submitted ? "bg-green-500" : "bg-blue-500 hover:bg-blue-700"}  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        disabled={submitting || submitted}
      >
        {submitted ? 'Success' : 'Submit'}
      </button>
    </div>
    <div className="w-full md:w-1/4 font-bold md:text-sm text-white  text-center">
        <div className="flex flex-row items-end md:justify-evenly">
        <p>This Form is powered by: </p>
        <img src={logo} className=" ml-1 w-12 md:w-20  mx-auto rounded-lg" alt="logofor"/>
        </div>
        </div>
     </div>
   
</form>


    </div>
    
);
}
  
export default Form;


