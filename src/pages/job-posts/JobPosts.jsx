import JobPostsTable from "./job-posts-table/JobPostsTable";
import classes from "./jobposts.module.css";
import { dummyJobPosts } from "./data";
import Filteration from "./filteration/Filteration";

function JobPosts() {
  return (
    <div className={classes["job-posts"]}>
      <div className={classes["filters"]}>
        <Filteration />
      </div>
      <div className="job-posts-table">
        <JobPostsTable dummyJobPosts={dummyJobPosts} />
      </div>
    </div>
  );
}

export default JobPosts;
