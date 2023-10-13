import { ToastContainer } from "react-toastify";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import NoteModel from "./components/NoteModel";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/note/:id" element={<NoteModel />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
