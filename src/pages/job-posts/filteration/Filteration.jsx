import classes from "./filteration.module.css";
import Headers from "./Headers";
import { SearchIcon, CalendarIcon, PolygonDown } from "../../../SvgIcons";
import Select from "react-select";
import DateModal from "./DateModal";
import { useState } from "react";

function FilterByStatus() {
  return (
    <div className={classes["dropdown-container"]}>
      <div className={classes["filter-by-status"]}>
        <select name="status">
          <option value="">Status</option>
          <option value="all-status">All Statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <PolygonDown />
      </div>
    </div>
  );
}

function FilterByAction() {
  return (
    <div className={classes["dropdown-container"]}>
      <div className={classes["filter-by-action"]}>
        <select name="action">
          <option value="">Action</option>
          <option value="all-actions">All Actions</option>
          <option value="active">Active</option>
          <option value="deactivated">Deactivated</option>
        </select>
        <PolygonDown />
      </div>
    </div>
  );
}

// function FilterByCategory() {
//   return (
//     <div className={classes["dropdown-container"]}>
//       <div className={classes["filter-by-category"]}>
//         <select name="category">
//           <option value="">Category</option>
//           <option value="all-categories">All Categories</option>
//           <option value="backend-development">Backend Development</option>
//           <option value="cloud-computing">Cloud Computing</option>
//           <option value="cross-platform-mobile-development">
//             Cross-Platform Mobile Development
//           </option>
//           <option value="database-development">Database Development</option>
//           <option value="embedded-systems-development">
//             Embedded Systems Development
//           </option>
//         </select>
//         <PolygonDown />
//       </div>
//     </div>
//   );
// }

function FilterByCategory() {
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

  // Add isLast property to the last option
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
      padding: "0",
      fontSize: "1.6rem",
      borderRadius: "5px",
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
      <PolygonDown style={{ height: "1.2rem", width: "1.2rem" }} />
    </span>
  );

  return (
    <div className="dropdown-container">
      <Select
        options={optionsWithLastFlag} // Use modified options with `isLast` flag
        styles={customStyles}
        placeholder="Category"
        isSearchable={false}
        isClearable={false}
        components={{ DropdownIndicator }}
      />
    </div>
  );
}

function FilterByJobType() {
  return (
    <div className={classes["dropdown-container"]}>
      <div className={classes["filter-by-job-type"]}>
        <select name="job-type">
          <option value="">Job Type</option>
          <option value="all-job-types">All Job Types</option>
          <option value="contract">Contract</option>
          <option value="part-time">Part-time</option>
          <option value="full-time">Full-time</option>
          <option value="per-project">Per-project</option>
          <option value="temporary">Temporary</option>
        </select>
        <PolygonDown />
      </div>
    </div>
  );
}

function FilterByTags() {
  return (
    <div className={classes["dropdown-container"]}>
      <div className={classes["filter-by-tags"]}>
        <select name="tags">
          <option value="">Tags</option>
          <option value="all-tags">All Tags</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <PolygonDown />
      </div>
    </div>
  );
}

function FilterBySkillLevel() {
  return (
    <div className={classes["dropdown-container"]}>
      <div className={classes["filter-by-skill-level"]}>
        <select name="skill-level">
          <option value="">Skill Level</option>
          <option value="all-skills">All Skills</option>
          <option value="active">Active</option>
          <option value="deactivated">Deactivated</option>
        </select>
        <PolygonDown />
      </div>
    </div>
  );
}

function DatePicker() {
  const [isOpen, setIsOpen] = useState(false);

  function handleDateModalClose() {
    setIsOpen(false);
  }
  return (
    <>
      <button
        className={classes["date-picker"]}
        onClick={() => setIsOpen(true)}
      >
        <CalendarIcon />
      </button>
      <DateModal isOpen={isOpen} onClose={handleDateModalClose} />
    </>
  );
}

function SearchInput() {
  return (
    <div className={classes["search-input"]}>
      <input type="text" placeholder="Search by title or company name..." />
      <span className={classes["search-icon"]}>
        <SearchIcon />
      </span>
    </div>
  );
}

function Filteration({ filters, updatedFilters }) {
  return (
    <div className={classes.filteration}>
      <div className={classes.titles}>
        <Headers />
      </div>
      <div className={classes.filterby}>
        <div className={classes["filteration-dropdowns"]}>
          <div className={classes["filteration-group"]}>
            <FilterByStatus />
            <FilterByAction />
          </div>
          <div className={classes["filteration-group"]}>
            <FilterByCategory />
            <FilterByJobType />
          </div>
          <div className={classes["filteration-group"]}>
            <FilterByTags />
            <FilterBySkillLevel />
          </div>
        </div>
        <div className={classes.search}>
          <DatePicker />
          <SearchInput />
        </div>
      </div>
    </div>
  );
}

export default Filteration;
