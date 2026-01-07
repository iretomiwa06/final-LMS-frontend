import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const navigate = useNavigate();
  const userCredentials = JSON.parse(
    localStorage.getItem("users") ?? "[]"
  );
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleLoginCredentials = () => {
    // Handle login credentials logic here
    for (const login of userCredentials) {
      console.log(login.email, login.password);
      if (login.email === newEmail && login.password === newPassword) {
        // Login successful
        setIsLoggedIn(true);
        setShowError(false);
        return;
      }
    }
    setShowError(true);
    setNewEmail("");
    setNewPassword("");
  };

  

  return (
    <>
  <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
    
    {/* Blue curved background */}
    <div className="absolute bottom-0 left-0 right-0 h-[75%] bg-sky-300 rounded-t-[50%]"></div>

    {/* Form */}
    <form className="relative z-10 w-full max-w-md flex flex-col items-center px-6">

      {/* Error message */}
      {showError && (
        <p className="text-red-500 mb-4 text-sm">
          Invalid email or password.
        </p>
      )}

      {/* Logo */}
      <img
        src="src/images/lcu logo.png"
        alt="LCU Logo"
        className="mb-6 w-20 h-20 object-contain"
      />

      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-700 mb-8">
        Login Page
      </h1>

      {/* Email */}
      <div className="w-full mb-5">
        <input
          type="text"
          placeholder="Username"
          value={newEmail}
          onChange={handleEmailChange}
          className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
        />
      </div>

      {/* Password */}
      <div className="w-full mb-8">
        <input
          type="password"
          placeholder="Password"
          value={newPassword}
          onChange={handlePasswordChange}
          className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
        />
      </div>

      {/* Button */}
      <button
        type="button"
        onClick={handleLoginCredentials}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition duration-300 mb-4"
      >
        Log in
      </button>

      {/* Footer text */}
      <p className="text-sm text-gray-700">
        Don’t have an account?{" "}
        <span className="text-pink-500 font-semibold cursor-pointer">
          Sign up
        </span>
      </p>
    </form>
  </div>
</>

  );
};

export default LoginPage;
