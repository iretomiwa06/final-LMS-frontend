import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreationPage from "./pages/CreationPage";
import LoginPage from "./pages/LoginPage";
import MyBooks from "./components/students/MyBooks";
import BookSearch from "./components/students/BookSearch/BookSearch";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CreationPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/students/my-books" element={<MyBooks />} />
        <Route path="/students/search" element={<BookSearch />} />
      </Routes>
    </div>
  );
};

export default App;