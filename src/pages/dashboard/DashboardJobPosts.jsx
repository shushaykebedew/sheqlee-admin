import classes from "./dashboardjobposts.module.css";
import CounterCard from "./cards/CounterCard";
import StatusCard from "./cards/StatusCard";
import CardWithDropDown from "./cards/CardWithDropDown";

const icons = {
  increment: `<svg xmlns="http://www.w3.org/2000/svg" width="40.053" height="57.809" viewBox="0 0 40.053 57.809">
  <g id="Group_8" data-name="Group 8" transform="translate(-923.787 -740.787)">
    <rect id="Rectangle_212" data-name="Rectangle 212" width="7" height="56" rx="3.5" transform="translate(940 742.595)" fill="#0f9d58"/>
    <rect id="Rectangle_213" data-name="Rectangle 213" width="5.608" height="28.038" rx="2.804" transform="translate(943.613 740.787) rotate(45)" fill="#0f9d58"/>
    <rect id="Rectangle_214" data-name="Rectangle 214" width="5.608" height="28.038" rx="2.804" transform="translate(940.049 744.752) rotate(-45)" fill="#0f9d58"/>
  </g>
</svg>
`,
  decrement: `<svg xmlns="http://www.w3.org/2000/svg" width="40.053" height="57.809" viewBox="0 0 40.053 57.809">
  <g id="Group_9" data-name="Group 9" transform="translate(963.84 798.595) rotate(180)">
    <rect id="Rectangle_212" data-name="Rectangle 212" width="7" height="56" rx="3.5" transform="translate(940 742.595)" fill="#db4437"/>
    <rect id="Rectangle_213" data-name="Rectangle 213" width="5.608" height="28.038" rx="2.804" transform="translate(943.613 740.787) rotate(45)" fill="#db4437"/>
    <rect id="Rectangle_214" data-name="Rectangle 214" width="5.608" height="28.038" rx="2.804" transform="translate(940.049 744.752) rotate(-45)" fill="#db4437"/>
  </g>
</svg>`,
};

function DashboardJobPosts() {
  return (
    <div className={classes["dashboard-job-posts"]}>
      <div className={classes["counter-cards"]}>
        <CounterCard number="14124" text="Total jobs posted" />
        <CounterCard number="14124" text="Total jobs posted" />
        <CardWithDropDown number="145" text="Jobs posted in" />
      </div>
      <div className={classes["status-cards"]}>
        <StatusCard
          number="984"
          text="Jobs posted this year so far"
          percentage="11%"
          icon={icons.increment}
        />
        <StatusCard
          number="84"
          text="Jobs posted this month so far"
          percentage="7%"
          icon={icons.decrement}
        />
      </div>
    </div>
  );
}

export default DashboardJobPosts;
