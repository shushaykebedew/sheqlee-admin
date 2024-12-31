import React, { useContext, useState } from "react";
import { PolygonDown } from "../../../SvgIcons";
import classes from "./FilterByCategory.module.css";
import { JobsContext } from "../JobPosts";

function FilterByCategory() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Category");
  const { onFilterChange } = useContext(JobsContext);

  const options = [
    { value: "", label: "Category" },
    { value: "all-categories", label: "All Categories" },
    { value: "backend-development", label: "Backend Development" },
    { value: "cloud-computing", label: "Cloud Computing" },
    {
      value: "cross-platform-mobile-development",
      label: "Cross-Platform Mobile Development",
    },
    { value: "database-development", label: "Database Development" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    {
      value: "embedded-systems-development",
      label: "Embedded Systems Development",
    },
    { value: "frontend-development", label: "Frontend Development" },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    onFilterChange(`category:${option.value}`);
    setIsDropdownOpen(false);
  };

  return (
    <div className={classes.container}>
      {/* Backdrop */}
      {isDropdownOpen && (
        <div
          className={classes.backdrop}
          onClick={() => setIsDropdownOpen(false)}
        />
      )}

      {/* Dropdown */}
      <div className={classes.dropdown}>
        <div
          className={`${classes.control} ${
            isDropdownOpen ? classes.active : ""
          }`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className={classes.label}>{selectedOption}</span>
          <PolygonDown className={classes.icon} />
        </div>

        {isDropdownOpen && (
          <ul className={classes.menu}>
            {options.map((option, index) => (
              <li
                key={option.value}
                className={`${classes.option} ${
                  index === options.length - 1 ? classes.lastOption : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FilterByCategory;
