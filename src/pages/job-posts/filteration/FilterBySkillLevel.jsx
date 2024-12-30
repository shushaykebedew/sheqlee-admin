import Select from "react-select";
import { PolygonDown } from "../../../SvgIcons";
import { useState } from "react";
import classes from "./dropdown-backdrop.module.css";

function FilterBySkillLevel({ onFilterChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const options = [
    { value: "", label: "Skill Level" },
    { value: "all-skills", label: "All Skills" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "expert", label: "Expert" },
  ];

  const optionsWithLastFlag = options.map((option, index) => ({
    ...option,
    isLast: index === options.length - 1,
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
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
      backgroundColor: "var(--input-bg-color)",
      color: "var(--placeholder-color)",
      border: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      height: "4.2rem",
      overflow: "hidden",
      boxShadow: state.isFocused
        ? "0 0 0 2px var(--focus-color)" // Custom focus style
        : "none", // No focus outline
      outline: "none", // Prevent blue outline
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0 2.5rem 0 1rem",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "var(--placeholder-color)",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--placeholder-color)",
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
    option: (provided, state) => {
      const isLast = state.data.isLast;
      return {
        ...provided,
        fontSize: "1.4rem",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        borderBottom: isLast ? "none" : "1px solid #B4B4B4",
      };
    },
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

  const handleFilterChange = (selectedOption) => {
    console.log(selectedOption.value);
    onFilterChange(selectedOption.value);
  };

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
          placeholder="Skill Level"
          isSearchable={false}
          isClearable={false}
          components={{ DropdownIndicator }}
          onMenuOpen={() => setIsDropdownOpen(true)}
          onMenuClose={() => setIsDropdownOpen(false)}
          onChange={handleFilterChange}
        />
      </div>
    </>
  );
}

export default FilterBySkillLevel;
