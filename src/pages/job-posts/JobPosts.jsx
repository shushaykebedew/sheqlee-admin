import JobPostsTable from "./job-posts-table/JobPostsTable";
import classes from "./jobposts.module.css";
import { dummyJobPosts } from "./data";
import Filteration from "./filteration/Filteration";
import { useState } from "react";

function JobPosts() {
  const [filteredJobs, setFilteredJobs] = useState(dummyJobPosts);

  const handleFilterChange = (filterCriteria) => {
    const filtered = dummyJobPosts.filter((jobPost) => {
      const jobStatus = jobPost.status.toLowerCase();

      if (filterCriteria === "all-status") return true;
      if (filterCriteria === "active") return jobStatus === "active";
      if (filterCriteria === "inactive") return jobStatus === "inactive"; // Changed from "deactivated"
      return true;
    });

    setFilteredJobs(filtered);
  };
  return (
    <div className={classes["job-posts"]}>
      <div className={classes["filters"]}>
        <Filteration onFilterChange={handleFilterChange} />
      </div>
      <div className="job-posts-table">
        <JobPostsTable dummyJobPosts={filteredJobs} />
      </div>
    </div>
  );
}

export default JobPosts;
