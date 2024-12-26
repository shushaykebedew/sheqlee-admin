import { Link, Outlet } from "react-router-dom";
import classes from "./dashboard.module.css";
function Dashboard() {
  return (
    <div>
      <div className={classes.topbar}>
        <ul>
          <li>
            <Link to="dashboard-job-posts">Job Posts</Link>
          </li>
          <li>
            <Link to="">Companies</Link>
          </li>
          <li>
            <Link to="">Freelancers</Link>
          </li>
          <li>
            <Link to="">Email Alerts</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
