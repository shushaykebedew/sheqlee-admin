import classes from "./countercard.module.css";

function CounterCard({ text, number }) {
  return (
    <div className={classes["counter-card"]}>
      <div className={classes.number}>{number}</div>
      <div className={classes.text}>{text}</div>
    </div>
  );
}

export default CounterCard;
