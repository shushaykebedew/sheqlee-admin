import React, { useState, useContext } from "react";
import { PolygonDown } from "../../../SvgIcons";
import classes from "./FilterByStatus.module.css";
import { JobsContext } from "../JobPosts";

function FilterByStatus() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Status");
  const { onFilterChange } = useContext(JobsContext);

  const options = [
    { value: "", label: "Status" },
    { value: "all-status", label: "All Statuses" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    onFilterChange(`status:${option.value}`);
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
          <span>{selectedOption}</span>
          <PolygonDown className={classes.icon} />
        </div>

        {isDropdownOpen && (
          <ul className={classes.menu}>
            {options.map((option, index) => (
              <li
                key={option.value}
                className={classes.option}
                style={{
                  borderBottom:
                    index === options.length - 1 ? "none" : "1px solid #B4B4B4",
                }}
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

export default FilterByStatus;
