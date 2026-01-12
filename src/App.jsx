import "./App.css";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import CreationPage from "./pages/CreationPage";
import LoginPage from "./pages/LoginPage";
import MyBooks from "./components/students/MyBooks";
import BookSearch from "./components/students/BookSearch";
import Operation from "./components/staff/Operation";
import IssueReturn from "./components/staff/IssueReturn";
import OverdueList from "./components/staff/OverdueList";
import Signup from "./pages/Signup";
=======
import LoginPage from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import StudentSignup from "./pages/StudentSignup";
import StaffSignup from "./pages/StaffSignup";

>>>>>>> pr-branch

const App = () => {
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<CreationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/operaation" element={<Operation />} />
        <Route path="/students/my-books" element={<MyBooks />} />
        <Route path="/students/search" element={<BookSearch />} />
        <Route path="/issuereturn" element={<IssueReturn />} />
        <Route path="/Overduelist" element={<OverdueList />} />
        <Route path="/signup" element={<Signup />} />
=======
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup/student" element={<StudentSignup />} />
        <Route path="/signup/staff" element={<StaffSignup />} />
        <Route path="/login" element={<LoginPage />} />
        
>>>>>>> pr-branch
      </Routes>
    </>
  );
};

export default App;
