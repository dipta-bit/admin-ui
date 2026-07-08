import React, { useState, useContext } from "react";
import AuthLayout from '../components/Layouts/AuthLayout';
import FormSignIn from '../components/Fragments/FormSignIn';
import { loginService } from '../services/authService';
import { AuthContext } from '../context/authContext';
import AppSnackbar from "../components/Elements/AppSnackbar";


import { DarkModeContext } from '../context/darkModeContext';

function SignIn() {
  const { login } = useContext(AuthContext);
  

  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  
  const [snackbar, setSnackbar] = useState({ 
    open: false,
    message: "",
    severity: "success"
   });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);
      
      console.log(refreshToken); 
      login(refreshToken);
    } catch (err) {
      setSnackbar((prev) => ({ ...prev, open: true, message: err.msg, severity: "error" }));
    }
  };

  return (
  <AuthLayout>
    <FormSignIn onSubmit={handleLogin} />
    

    <div className="flex justify-center mt-8">
    </div>

    <AppSnackbar
      open={snackbar.open}
      message={snackbar.message}
      severity={snackbar.severity}
      onClose={handleCloseSnackbar}
    />
  </AuthLayout>
  )
}

export default SignIn;