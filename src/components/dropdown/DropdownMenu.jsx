// Dropdown.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./dropdownmenu.module.css";

const Dropdown = ({ filterBy }) => {
  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  // Create an array for years (e.g., current year to current year + 10)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (v, i) => currentYear + i).map(
    (year) => ({
      value: year,
      label: year,
    })
  );

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    console.log("Selected Month:", event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    console.log("Selected Year:", event.target.value);
  };

  return (
    <div className={styles.dropdownContainer}>
      {filterBy === "month" && (
        <div className={styles.dropdown}>
          <select
            id="month"
            value={selectedMonth}
            onChange={handleMonthChange}
            className={styles.select}
          >
            <option value="">--Select Month--</option>
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
          <span className={styles.arrow}>&#9654;</span>{" "}
          {/* Forward arrow for month */}
        </div>
      )}
      {filterBy === "year" && (
        <div className={styles.dropdown}>
          <select
            id="year"
            value={selectedYear}
            onChange={handleYearChange}
            className={styles.select}
          >
            <option value="">--Select Year--</option>
            {years.map((year) => (
              <option key={year.value} value={year.value}>
                {year.label}
              </option>
            ))}
          </select>
          <span className={styles.arrow}>&#9654;</span>{" "}
          {/* Forward arrow for year */}
        </div>
      )}
      {filterBy === "month" && selectedMonth && (
        <p>
          You selected:{" "}
          {months.find((month) => month.value === selectedMonth)?.label}
        </p>
      )}
      {filterBy === "year" && selectedYear && (
        <p>You selected: {selectedYear}</p>
      )}
    </div>
  );
};

// PropTypes for validation
Dropdown.propTypes = {
  filterBy: PropTypes.oneOf(["month", "year"]).isRequired,
};

export default Dropdown;
