import classes from "./statuscard.module.css";

function StatusCard({ text, number, percentage, icon }) {
  return (
    <div className={classes["status-card"]}>
      <div className={classes.left}>
        <div className={classes.number}>{number}</div>
        <div className={classes.text}>{text}</div>
      </div>
      <div className={classes.right}>
        <div
          className={classes.icon}
          dangerouslySetInnerHTML={{ __html: icon }}
        ></div>
        <div className={classes.percentage}>{percentage}</div>
      </div>
    </div>
  );
}

export default StatusCard;
