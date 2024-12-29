import { PolygonDown } from "../../../SvgIcons";
import classes from "./filterationdropdown.module.css";

function FilterationDropdown({ name, options, width }) {
  return (
    <div className={classes["dropdown-container"]}>
      <div className={classes["select-wrapper"]} style={{ width: width }}>
        <select name={name}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <PolygonDown />
      </div>
    </div>
  );
}

export default FilterationDropdown;
