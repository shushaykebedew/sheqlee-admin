import Dropdown from "../../../components/dropdown/DropdownMenu";
import classes from "./cardwithdropdown.module.css";

function CardWithDropDown({ text, number, filterBy }) {
  return (
    <div className={classes["card-with-dropdown"]}>
      <div className={classes.number}>{number}</div>
      <div className={classes.text}>{text}</div>
      <div className={classes.filterby}>
        <Dropdown type="year" />
      </div>
    </div>
  );
}

export default CardWithDropDown;
