import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Form from './components/Form';
import LandingPage from './components/LandingPage';
import FormNeco from './components/FormNeco';
import { isLoggedIn } from './components/auth';
import useSessionTimeout from './components/useSessionTimeout';




const App = () => {

  useSessionTimeout(); // Use the session timeout hook
  return (

    <div className="">
     <Routes>
     <Route
          path="/"
          element={isLoggedIn() ? <LandingPage /> : <Login />}
        />
        <Route
          path="/login"
          element={isLoggedIn() ? <LandingPage /> : <Login />}
        />
        <Route
          path="/auth/welcome"
          element={isLoggedIn() ? <LandingPage /> : <Login />}
        />
        <Route
          path="/auth/waec_capture"
          element={isLoggedIn() ? <Form /> : <Login />}
        />
        <Route
          path="/auth/neco_capture"
          element={isLoggedIn() ? <FormNeco /> : <Login />}
        />
     </Routes>
     
    </div>
    
  );
};

export default App;



