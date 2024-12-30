import JobPostsTable from "./job-posts-table/JobPostsTable";
import classes from "./jobposts.module.css";
import { dummyJobPosts } from "./data";
import Filteration from "./filteration/Filteration";
import { useState } from "react";

function JobPosts() {
  const [filteredJobs, setFilteredJobs] = useState(dummyJobPosts);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (filterCriteria) => {
    const filtered = dummyJobPosts.filter((jobPost) => {
      const jobStatus = jobPost.status ? jobPost.status.toLowerCase() : "";
      const jobAction = jobPost.action ? jobPost.action.toLowerCase() : "";
      const jobSkill = jobPost.skills ? jobPost.skills.toLowerCase() : "";
      const jobType = jobPost.jobType ? jobPost.jobType.toLowerCase() : "";

      // filter by status
      if (filterCriteria === "all-status") return true;
      if (filterCriteria === "active") return jobStatus === "active";
      if (filterCriteria === "inactive") return jobStatus === "inactive";

      // filter by action
      if (filterCriteria === "all-actions") return true;
      if (filterCriteria === "active") return jobAction === "active";
      if (filterCriteria === "deactivated") return jobAction === "deactivated";

      // filter by skill-level
      if (filterCriteria === "all-skills") return true;
      if (filterCriteria === "beginner") return jobSkill === "beginner";
      if (filterCriteria === "intermediate") return jobSkill === "intermediate";
      if (filterCriteria === "expert") return jobSkill === "expert";

      // filter by job type
      if (filterCriteria === "all-job-types") return true;
      if (filterCriteria === "contract") return jobType === "contract";
      if (filterCriteria === "full-time") return jobType === "fulltime";
      if (filterCriteria === "part-time") return jobType === "part-time";
      if (filterCriteria === "per-project") return jobType === "per-project";
      if (filterCriteria === "temporary") return jobType === "temporary";

      return true;
    });

    setFilteredJobs(filtered);
  };

  const handleSearchChange = (searchValue) => {
    setSearchQuery(searchValue);

    if (searchValue === "") {
      setFilteredJobs(dummyJobPosts);
    } else {
      const searchedJobs = dummyJobPosts.filter((jobPost) => {
        const jobTitle = jobPost.title ? jobPost.title.toLowerCase() : "";
        const companyName = jobPost.company
          ? jobPost.company.toLowerCase()
          : "";
        return (
          jobTitle.includes(searchValue.toLowerCase()) ||
          companyName.includes(searchValue.toLowerCase())
        );
      });
      setFilteredJobs(searchedJobs);
    }
  };

  return (
    <div className={classes["job-posts"]}>
      <div className={classes["filters"]}>
        <Filteration
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
        />
      </div>
      <div className="job-posts-table">
        <JobPostsTable dummyJobPosts={filteredJobs} />
      </div>
    </div>
  );
}

export default JobPosts;
