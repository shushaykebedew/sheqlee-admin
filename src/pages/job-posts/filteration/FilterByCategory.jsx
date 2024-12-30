import React, { useState } from "react";
import Select from "react-select";
import { PolygonDown } from "../../../SvgIcons";
import classes from "./dropdown-backdrop.module.css";

function FilterByCategory() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    {
      value: "embedded-systems-development",
      label: "Embedded Systems Development",
    },
  ];

  const optionsWithLastFlag = options.map((option, index) => ({
    ...option,
    isLast: index === options.length - 1, // Mark the last option
  }));

  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: "100%",
      position: "relative",
    }),
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      maxWidth: "20rem",
      minWidth: "20rem",
      padding: "0",
      fontSize: "1.6rem",
      borderRadius: "7px",
      backgroundColor: "var(--input-bg-color)",
      color: "var(--placeholder-color)",
      border: "none",
      boxShadow: state.isFocused ? "0 0 0 2px var(--focus-color)" : "none",
      cursor: "pointer",
      fontFamily: "inherit",
      height: "4.2rem",
      overflow: "hidden",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0 2.5rem 0 1rem",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "var(--icon-color)",
      padding: "0",
      paddingRight: "1rem",
      alignItems: "center",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 10,
    }),
    menuList: (provided) => ({
      ...provided,
      fontSize: "1.4rem",
      whiteSpace: "nowrap",
      overflow: "hidden",
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "1.4rem",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      borderBottom: state.data.isLast ? "none" : "1px solid #B4B4B4",
    }),
  };

  const DropdownIndicator = () => (
    <span
      style={{
        position: "absolute",
        top: "50%",
        right: "1rem",
        transform: "translateY(-50%)",
      }}
    >
      <PolygonDown style={{ height: "1.3rem", width: "1.3rem" }} />
    </span>
  );

  return (
    <>
      {isDropdownOpen && (
        <div
          className={classes["dropdown-backdrop"]}
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}

      <div className="dropdown-container">
        <Select
          options={optionsWithLastFlag}
          styles={customStyles}
          placeholder="Category"
          isSearchable={false}
          isClearable={false}
          components={{ DropdownIndicator }}
          onMenuOpen={() => setIsDropdownOpen(true)}
          onMenuClose={() => setIsDropdownOpen(false)}
        />
      </div>
    </>
  );
}

export default FilterByCategory;
