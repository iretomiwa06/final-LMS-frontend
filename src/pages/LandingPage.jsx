import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-white relative overflow-hidden">
     
     

      <div className="relative z-10 bg-white/90 p-10 rounded-3xl  max-w-md w-full flex flex-col items-center text-center">
        <img 
          src="/logo.png" 
          alt="Library Logo" 
          className="w-24 h-24 object-contain mb-6 drop-shadow-lg"
        />
        <h1 className="text-4xl font-bold text-blue-700 mb-4 tracking-wide">Library Manager</h1>
        <p className="text-gray-700 text-base mb-8 leading-relaxed">
          Welcome to our comprehensive Library Management System.<br/>
          Manage books, track borrowers, and streamline your library operations
          with our easy-to-use platform. Get started by creating an account or
          logging in to access your dashboard.
        </p>
        <button
          className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:from-blue-500 hover:to-cyan-400 transition-all duration-200 text-lg"
          onClick={() => navigate("/login")}
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
