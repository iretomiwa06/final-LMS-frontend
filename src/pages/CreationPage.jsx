import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { mockUserCredentialsData } from "../mockdata";

const KEY = "users";
const initialUsers = () => {
  const saved = localStorage.getItem(KEY);
  return saved ? JSON.parse(saved) : mockUserCredentialsData;
};

const CreationPage = () => {
  const navigate = useNavigate();

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newUser, setNewUser] = useState(initialUsers);
  const [isUserCreated, setIsUserCreated] = useState(false);

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleAddUserCredentials = () => {
    const updated = [...newUser, { email: newEmail, password: newPassword }];
    setNewUser(updated);
    setIsUserCreated(true);
    localStorage.setItem(KEY, JSON.stringify(updated));
  };

  useEffect(() => {
    if (isUserCreated) {
      navigate("/login-page");
    }
  }, [isUserCreated, navigate]);

  return (
    <>
  <div className=" flex items-center justify-center  overflow-hidden">
    {/* Blue curved background */}
    <div className="absolute bottom-0 left-0 right-0 h-[80%] bg-sky-300 rounded-t-[50%]"></div>

    {/* Form Card */}
    <form className="relative z-10 w-full max-w-md flex flex-col items-center px-6">
      
      {/* Logo */}
      <img
        src="src/images/lcu logo.png"
        alt="LCU Logo"
        className="mb-15 w-40 h-40 object-contain"
      />

      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-700 mb-8">
        Account Creation Page
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
        onClick={handleAddUserCredentials}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition duration-300 mb-4"
      >
        Register
      </button>

      {/* Footer text */}
      <p className="text-sm text-gray-700">
        Already have an account?{" "}
        <span className="text-white font-semibold cursor-pointer">
          Sign in
        </span>
      </p>
    </form>
  </div>
</>

  );
};

export default CreationPage;
