import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import ForgotPassword from "./login/forgot-password/ForgotPassword";
import NewPassword from "./login/new-password/NewPassword";
import AccountActivation from "./login/account-activation/AccountActivation";
import ActivationForm from "./login/activation-form/ActivationForm";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/dashboard/Dashboard";
import JobPosts from "./pages/job-posts/JobPosts";
import Companies from "./pages/companies/Companies";
import Freelancers from "./pages/freelancers/Freelancers";
import Categories from "./pages/categories/Categories";
import Tags from "./pages/tags/Tags";
import Subscribers from "./pages/subscribers/Subscribers";
import SystemConfig from "./pages/system-config/SystemConfig";
import Users from "./pages/users/Users";
import DashboardJobPosts from "./pages/dashboard/DashboardJobPosts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/account-activation" element={<AccountActivation />} />
        <Route path="/activation-form" element={<ActivationForm />} />

        <Route path="/home" element={<HomePage />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="dashboard-job-posts" element={<DashboardJobPosts />} />
          </Route>
          <Route path="job-posts" element={<JobPosts />} />
          <Route path="companies" element={<Companies />} />
          <Route path="freelancers" element={<Freelancers />} />
          <Route path="categories" element={<Categories />} />
          <Route path="tags" element={<Tags />} />
          <Route path="subscribers" element={<Subscribers />} />
          <Route path="system-config" element={<SystemConfig />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
