import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css"; // Import the default styles
import classes from "./datemodal.module.css";
import { CalendarIcon, CancelIcon } from "../../../SvgIcons";

function Backdrop({ onClose }) {
  return (
    <div className={classes.backdrop}>
      <button onClick={onClose} className={classes["date-picker-close-btn"]}>
        <CancelIcon />
      </button>
    </div>
  );
}

function DatePickerModal({ children }) {
  return <div className={classes.modal}>{children}</div>;
}

function DateModal({ isOpen, onClose }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleApplyFilters = () => {
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <DatePickerModal>
          <div className={classes["date-picker-modal"]}>
            <h2>FILTER BY DATE</h2>
            <div className={classes["date-picker-inputs"]}>
              <div className={classes["date-picker-wrapper"]}>
                <Datetime
                  value={startDate}
                  onChange={(date) => setStartDate(date)}
                  inputProps={{
                    placeholder: "From date",
                    className: classes.input,
                  }}
                />
                <CalendarIcon className={classes["calendar-icon"]} />
              </div>
              <div className={classes["date-picker-wrapper"]}>
                <Datetime
                  value={endDate}
                  onChange={(date) => setEndDate(date)}
                  inputProps={{
                    placeholder: "To date",
                    className: classes.input,
                  }}
                />
                <CalendarIcon className={classes["calendar-icon"]} />
              </div>
            </div>
            <div className={classes["date-picker-action"]}>
              <button
                onClick={handleApplyFilters}
                className={classes["date-picker-apply-btn"]}
              >
                Apply filter
              </button>
            </div>
          </div>
        </DatePickerModal>,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default DateModal;
