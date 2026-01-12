<<<<<<< HEAD
import { Link } from 'react-router-dom';
import './Auth.css'

function Login() {
  return (
    <div className="auth-container">
      <div className="container">
        <div className="edge-design1"></div>
        <div className="edge-design2"></div>
      </div>
      <div className="auth-curve"></div>
      <div className="auth-card">
        <img src="/logo.png" alt="School Logo" className="logo" />

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button className='login-button'>Login</button>

        <p className="auth-text">
          Don't have an account?{" "} 
          <Link to="/signup">
            <span>Sign up</span>
          </Link>
          
        </p>
      </div>
    </div>
  );
}

export default Login;

=======
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignupModal from "../components/SignupModal";

const LoginPage = () => {
  const navigate = useNavigate();
  const userCredentials = JSON.parse(localStorage.getItem("users") ?? "[]");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

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
<<<<<<<< HEAD:src/pages/LoginPage.jsx
  <div className="flex items-center justify-center  overflow-hidden">
    
    {/* Blue curved background */}
    <div className="absolute bottom-0 left-0 right-0 h-[80%] bg-sky-300 rounded-t-[50%]"></div>

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
        className="mb-15 w-40 h-40 object-contain"
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
        <span className="text-white font-semibold cursor-pointer">
          Sign up
        </span>
      </p>
    </form>
  </div>
</>

========
      <div>
        {showError && (
          <p style={{ color: "red" }}>Invalid email or password.</p>
        )}
      </div>
      <form>
        <h1>Login Page</h1>
        <div>
          <label>Email: </label>
          <input
            type="text"
            placeholder="Email"
            value={newEmail}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Password"
            value={newPassword}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={handleLoginCredentials}>
          Login
        </button>
        <p>
          Don't have an account?{" "}
          <button type="button" onClick={() => setShowSignupModal(true)}>
            Signup
          </button>
        </p>
      </form>
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
      />
    </>
>>>>>>>> pr-branch:src/pages/Login.jsx
  );
};

export default LoginPage;
>>>>>>> pr-branch
