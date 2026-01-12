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
    <div>
      <form onSubmit={handleSubmit}>
        <img src="/vite.svg" alt="Library Logo" />

        {error && <div style={{ color: "red" }}>{error}</div>}

        <div>
          <label>Full Name: </label>
          <input
            type="text"
            name="fullName"
            placeholder="Jane Smith"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>ID Number: </label>
          <input
            type="text"
            name="idNumber"
            placeholder="STF12345"
            value={formData.idNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="staff@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Min 6 characters"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Sign Up</button>

        <p>
          Already have an account?{" "}
          <button type="button" onClick={() => navigate("/login")}>
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default StaffSignup;
