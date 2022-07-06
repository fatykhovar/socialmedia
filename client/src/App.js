import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Upload from "./pages/Upload/Upload";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register"  element={<Register />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
     </Router>
    </>
  );
}

export default App;
