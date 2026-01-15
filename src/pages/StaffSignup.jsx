import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StaffSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (
      !formData.fullName ||
      !formData.idNumber ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All fields are required.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Save to localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if email already exists
    if (users.some((user) => user.email === formData.email)) {
      setError("Email already exists.");
      return;
    }

    users.push({
      fullName: formData.fullName,
      idNumber: formData.idNumber,
      email: formData.email,
      password: formData.password,
      role: "staff",
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Staff account created successfully!");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden relative">
  {/* Background semi-circle */}
  <div className="absolute inset-0">
    <div className="absolute bottom-0 left-0 right-0 h-[90%] bg-sky-300 rounded-t-[50%]"></div>
  </div>

  <form
    onSubmit={handleSubmit}
    className="relative z-10 w-full max-w-md flex flex-col items-center px-6"
  >
    <img
      src="/logo.png"
      alt="Library Logo"
      className="mb-6 w-40 h-40 object-contain"
    />

    {error && (
      <div className="text-red-500 text-sm mb-4">
        {error}
      </div>
    )}

    <div className="w-full mb-4">
      <label className="block text-sm text-gray-700 mb-1">Full Name:</label>
      <input
        type="text"
        name="fullName"
        placeholder="Jane Smith"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full px-5 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-400"
      />
    </div>

    <div className="w-full mb-4">
      <label className="block text-sm text-gray-700 mb-1">ID Number:</label>
      <input
        type="text"
        name="idNumber"
        placeholder="STF12345"
        value={formData.idNumber}
        onChange={handleChange}
        className="w-full px-5 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-400"
      />
    </div>

    <div className="w-full mb-4">
      <label className="block text-sm text-gray-700 mb-1">Email:</label>
      <input
        type="email"
        name="email"
        placeholder="staff@example.com"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-5 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-400"
      />
    </div>

    <div className="w-full mb-4">
      <label className="block text-sm text-gray-700 mb-1">Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Min 6 characters"
        value={formData.password}
        onChange={handleChange}
        className="w-full px-5 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-400"
      />
    </div>

    <div className="w-full mb-6">
      <label className="block text-sm text-gray-700 mb-1">Confirm Password:</label>
      <input
        type="password"
        name="confirmPassword"
        placeholder="Re-enter password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="w-full px-5 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-400"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition duration-300 mb-4"
    >
      Sign Up
    </button>

    <p className="text-sm text-gray-700">
      Already have an account?{" "}
      <button
        type="button"
        onClick={() => navigate("/login")}
        className="text-white font-semibold cursor-pointer hover:underline"
      >
        Sign in
      </button>
    </p>
  </form>
</div>

  );
};

export default StaffSignup;
