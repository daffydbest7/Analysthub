import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Element } from 'react-scroll';
//import Form from "./components/WaecForm";
import Login from './components/Login';
import Form from './components/Form';




const App = () => {
  return (
    <div className="">
     <Routes>
     <Route path="/" element={<Form />} />
     <Route path="/form" element={<Form />} />
     </Routes>
     
    </div>
    
  );
};

export default App;



