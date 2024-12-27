import { useState } from "react";
import classes from "./topbaritems.module.css";
import { Link } from "react-router-dom";

const topbarItems = [
  {
    title: "Job Posts",
    to: "dashboard-job-posts",
  },
  {
    title: "Companies",
    to: "companies",
  },
  {
    title: "Freelancers",
    to: "freelancers",
  },
  {
    title: "Email Alerts",
    to: "email-alerts",
  },
];

function TopbarItems() {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleItemClick(index) {
    setActiveIndex(index);
  }

  return (
    <div className={classes["topbar-items"]}>
      <ul>
        {topbarItems.map((item, index) => (
          <li
            key={item.to}
            className={`${classes["topbar-item"]} ${
              activeIndex === index ? classes.active : ""
            }`}
            onClick={() => handleItemClick(index)}
          >
            <Link to={item.to}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopbarItems;
