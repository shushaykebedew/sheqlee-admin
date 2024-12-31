import React, { useState } from "react";
import { PolygonDown } from "../../../SvgIcons";
import classes from "./FilterByTags.module.css";

function FilterByTags() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Tags");

  const options = [
    { value: "", label: "Tags" },
    { value: "all-tags", label: "All Tags" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
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

export default FilterByTags;
