import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Form from './components/Form';
import { isLoggedIn } from './components/auth';




const App = () => {
  return (

    <div className="">
     <Routes>
     <Route
          path="/"
          element={isLoggedIn() ? <Form /> : <Login />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/form"
          element={isLoggedIn() ? <Form /> : <Login />}
        />
     </Routes>
     
    </div>
    
  );
};

export default App;



