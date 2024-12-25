import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import ForgotPassword from "./login/forgot-password/ForgotPassword";
import NewPassword from "./login/new-password/NewPassword";
import AccountActivation from "./login/account-activation/AccountActivation";
import ActivationForm from "./login/activation-form/ActivationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/account-activation" element={<AccountActivation />} />
        <Route path="/activation-form" element={<ActivationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
