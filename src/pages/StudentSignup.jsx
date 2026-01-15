import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    matricNumber: "",
    course: "",
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
      !formData.matricNumber ||
      !formData.course ||
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
      matricNumber: formData.matricNumber,
      course: formData.course,
      email: formData.email,
      password: formData.password,
      role: "student",
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Student account created successfully!");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center   relative">
      {/* Background semi-circle */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-[95%] bg-sky-300 rounded-t-[50%]"></div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative z-30 w-full max-w-md flex flex-col items-center px-6 pb-8"
      >
        <img
          src="/logo.png"
          alt="Library Logo"
          className="mb-6 w-40 h-40 object-contain"
        />

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <div className="w-full mb-4">
          <label className="block text-sm text-gray-700 mb-1">Full Name:</label>
          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
          />
        </div>

        <div className="w-full mb-4">
          <label className="block text-sm text-gray-700 mb-1">
            Matric Number:
          </label>
          <input
            type="text"
            name="matricNumber"
            placeholder="STU12345"
            value={formData.matricNumber}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
          />
        </div>

        <div className="w-full mb-4">
          <label className="block text-sm text-gray-700 mb-1">Course:</label>
          <input
            type="text"
            name="course"
            placeholder="Computer Science"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
          />
        </div>

        <div className="w-full mb-4">
          <label className="block text-sm text-gray-700 mb-1">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="student@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
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
            className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
          />
        </div>

        <div className="w-full mb-6">
          <label className="block text-sm text-gray-700 mb-1">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition duration-300 mb-4"
        >
          Sign Up
        </button>

        <p className="text-sm text-gray-700 mt-2">
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

export default StudentSignup;
