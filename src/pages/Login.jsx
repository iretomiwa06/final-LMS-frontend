import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupModal from "../components/SignupModal";
import './Auth.css';

function Login() {
  const navigate = useNavigate();
  const userCredentials = JSON.parse(localStorage.getItem("users") ?? "[]");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleLoginCredentials = () => {
    for (const login of userCredentials) {
      if (login.email === newEmail && login.password === newPassword) {
        // Login successful
        setShowError(false);
        // Navigate to dashboard or home page
        navigate("/dashboard");
        return;
      }
    }
    setShowError(true);
    setNewEmail("");
    setNewPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden relative">
  <div className="absolute inset-0">
    <div className="absolute bottom-0 left-0 right-0 h-[75%] bg-sky-300 rounded-t-[50%]"></div>
  </div>

  <div className="relative z-10 w-full max-w-md flex flex-col items-center px-6">
    <img
      src="/logo.png"
      alt="School Logo"
      className="mb-6 w-40 h-40 object-contain"
    />

    {showError && (
      <p className="text-red-500 text-sm mb-4">
        Invalid email or password.
      </p>
    )}

    <input
      type="text"
      placeholder="Username"
      value={newEmail}
      onChange={handleEmailChange}
      className="w-full mb-5 px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
    />

    <input
      type="password"
      placeholder="Password"
      value={newPassword}
      onChange={handlePasswordChange}
      className="w-full mb-8 px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
    />

    <button
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition duration-300 mb-4"
      type="button"
      onClick={handleLoginCredentials}
    >
      Login
    </button>

    <p className="text-sm text-gray-700">
      Don't have an account?{" "}
      <span
        onClick={() => setIsModalOpen(true)}
        className="text-white font-semibold cursor-pointer"
      >
        Sign up
      </span>
    </p>
  </div>

  <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
</div>

  );
}

export default Login;