import JobPostsTable from "./job-posts-table/JobPostsTable";
import classes from "./jobposts.module.css";

function JobPosts() {
  return (
    <div className={classes["job-posts"]}>
      <div className={classes["filter-by"]}>filters</div>
      <div className="job-posts-table">
        <JobPostsTable />
      </div>
    </div>
  );
}

export default JobPosts;
