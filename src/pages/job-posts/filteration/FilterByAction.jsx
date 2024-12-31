import React, { useContext, useState } from "react";
import { PolygonDown } from "../../../SvgIcons";
import classes from "./FilterByAction.module.css";
import { JobsContext } from "../JobPosts";

function FilterByAction() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Action");
  const { onFilterChange } = useContext(JobsContext);

  const options = [
    { value: "", label: "Action" },
    { value: "all-actions", label: "All Actions" },
    { value: "active", label: "Active" },
    { value: "deactivated", label: "Deactivated" },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    onFilterChange(`action:${option.value}`);
    setIsDropdownOpen(false);
  };

  return (
    <div className={classes.container}>
      {isDropdownOpen && (
        <div
          className={classes.backdrop}
          onClick={() => setIsDropdownOpen(false)}
        />
      )}

      <div className={classes.dropdown}>
        <div
          className={`${classes.control} ${
            isDropdownOpen ? classes.active : ""
          }`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>{selectedOption}</span>
          <PolygonDown className={classes.icon} />{" "}
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

export default FilterByAction;
