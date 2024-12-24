import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import ForgotPassword from "./login/ForgotPassword";
import NewPassword from "./login/NewPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/newpassword" element={<NewPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
