import React, { useContext, useState } from "react";
import { PolygonDown } from "../../../SvgIcons";
import classes from "./FilterByJobType.module.css";
import { JobsContext } from "../JobPosts";

function FilterByJobType() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Job Type");
  const { onFilterChange } = useContext(JobsContext);

  const options = [
    { value: "", label: "Job Type" },
    { value: "all-job-types", label: "All Job Types" },
    { value: "contract", label: "Contract" },
    { value: "part-time", label: "Part-time" },
    { value: "fulltime", label: "Full-time" },
    { value: "per-project", label: "Per-project" },
    { value: "temporary", label: "Temporary" },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    onFilterChange(`jobType:${option.value}`);
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

export default FilterByJobType;
