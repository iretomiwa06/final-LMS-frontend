import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img 
        src="/vite.svg" 
        alt="Library Logo" 
      />
      <h1>Library Manager</h1>
      <p>
        Welcome to our comprehensive Library Management System. 
        Manage books, track borrowers, and streamline your library operations 
        with our easy-to-use platform. Get started by creating an account or 
        logging in to access your dashboard.
      </p>
      <div>
        <button onClick={() => navigate("/login")}>
          Get started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
