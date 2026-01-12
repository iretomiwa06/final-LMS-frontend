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
    if (!formData.fullName || !formData.matricNumber || !formData.course || !formData.email || !formData.password || !formData.confirmPassword) {
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
    if (users.some(user => user.email === formData.email)) {
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
    <div>
      <form onSubmit={handleSubmit}>
        <img 
          src="/vite.svg" 
          alt="Library Logo" 
        />
        
        {error && <div style={{ color: "red" }}>{error}</div>}
        
        <div>
          <label>Full Name: </label>
          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Matric Number: </label>
          <input
            type="text"
            name="matricNumber"
            placeholder="STU12345"
            value={formData.matricNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Course: </label>
          <input
            type="text"
            name="course"
            placeholder="Computer Science"
            value={formData.course}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="student@example.com"
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

export default StudentSignup;
