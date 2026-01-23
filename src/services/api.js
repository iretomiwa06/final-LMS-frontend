import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: "https://lms-backend-qp3p.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// API function
export const loginUser = (data) => {
  return api.post("/api/auth/login", data);
};

export const studentSignup = (data) => {
  return api.post("/api/auth/student-signup", data);
};

export const staffSignup = (data) => {
  return api.post("/api/auth/staff-signup", data);
};

export const getAllBooks = () => {
  return API.get("/api/book");
};

// Search books
export const searchBooks = (query) => {
  return API.get(`/api/book/search?query=${query}`);
};




export default api;


