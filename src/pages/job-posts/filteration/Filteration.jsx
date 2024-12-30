import classes from "./filteration.module.css";
import Headers from "./Headers";
import { SearchIcon, CalendarIcon, PolygonDown } from "../../../SvgIcons";
import Select from "react-select";
import DateModal from "./DateModal";
import { useState } from "react";
import FilterByStatus from "./FilterByStatus";
import FilterByAction from "./FilterByAction";
import FilterByCategory from "./FilterByCategory";
import FilterByJobType from "./FilterByJobType";
import FilterByTags from "./FilterByTags";
import FilterBySkillLevel from "./FilterBySkillLevel";

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

function SearchInput({ onSearchChange }) {
  return (
    <div className={classes["search-input"]}>
      <input
        type="text"
        placeholder="Search by title or company name..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <span className={classes["search-icon"]}>
        <SearchIcon />
      </span>
    </div>
  );
}

function Filteration({ onFilterChange, onSearchChange }) {
  return (
    <div className={classes.filteration}>
      <div className={classes.titles}>
        <Headers />
      </div>
      <div className={classes.filterby}>
        <div className={classes["filteration-dropdowns"]}>
          <div className={classes["filteration-group"]}>
            <FilterByStatus onFilterChange={onFilterChange} />
            <FilterByAction onFilterChange={onFilterChange} />
          </div>
          <div className={classes["filteration-group"]}>
            <FilterByCategory />
            <FilterByJobType onFilterChange={onFilterChange} />
          </div>
          <div className={classes["filteration-group"]}>
            <FilterByTags />
            <FilterBySkillLevel onFilterChange={onFilterChange} />
          </div>
        </div>
        <div className={classes.search}>
          <DatePicker />
          <SearchInput onSearchChange={onSearchChange} />
        </div>
      </div>
    </div>
  );
}
export default Filteration;
