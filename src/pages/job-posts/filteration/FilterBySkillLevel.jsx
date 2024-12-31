import React, { useContext, useState } from "react";
import { PolygonDown } from "../../../SvgIcons";
import classes from "./FilterBySkillLevel.module.css";
import { JobsContext } from "../JobPosts";

function FilterBySkillLevel() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Skill Level");
  const { onFilterChange } = useContext(JobsContext);

  const options = [
    { value: "", label: "Skill Level" },
    { value: "all-skills", label: "All Skills" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "expert", label: "Expert" },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    onFilterChange(`skills:${option.value}`);
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

export default FilterBySkillLevel;
