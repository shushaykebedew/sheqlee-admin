import classes from "./filteration.module.css";
import FilterationDropdown from "./FilterationDropdown";
import Headers from "./Headers";
import { SearchIcon, CalendarIcon } from "../../../SvgIcons";

function Filteration() {
  return (
    <div className={classes.filteration}>
      <div className={classes.titles}>
        <Headers />
      </div>
      <div className={classes.filterby}>
        <div className={classes["filteration-dropdowns"]}>
          <div className={classes["filteration-group"]}>
            <FilterationDropdown
              name="status"
              width="15rem"
              options={[
                { value: "", label: "Status" },
                { value: "all-status", label: "All Statuses" },
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ]}
            />
            <FilterationDropdown
              name="Action"
              width="15rem"
              options={[
                { value: "", label: "Action" },
                { value: "all-actions", label: "All Actions" },
                { value: "active", label: "Active" },
                { value: "deactivated", label: "Deactivated" },
              ]}
            />
          </div>
          <div className={classes["filteration-group"]}>
            <FilterationDropdown
              name="category"
              width="20rem"
              options={[
                { value: "", label: "Category" },
                { value: "all-categories", label: "All Categories" },
                { value: "backend-development", label: "Backend Development" },
                { value: "cloud-computing", label: "Cloud Computing" },
                {
                  value: "cross-platform-mobile-development",
                  label: "Cross-Platform Mobile Development",
                },
                {
                  value: "database-development",
                  label: "Database Development",
                },
                {
                  value: "embedded-systems-development",
                  label: "Embedded Systems Development",
                },
              ]}
            />
            <FilterationDropdown
              name="job-type"
              width="20rem"
              options={[
                { value: "", label: "Job type" },
                { value: "all-job-types", label: "All job types" },
                { value: "contract", label: "Contract" },
                { value: "part-time", label: "Part-time" },
                { value: "full-time", label: "Full-time" },
                { value: "per-project", label: "Per-project" },
                { value: "temporary", label: "Temporary" },
              ]}
            />
          </div>
          <div className={classes["filteration-group"]}>
            <FilterationDropdown
              name="tags"
              width="20rem"
              options={[
                { value: "", label: "Tags" },
                { value: "all-tags", label: "All Tags" },
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ]}
            />
            <FilterationDropdown
              name="skill-level"
              width="20rem"
              options={[
                { value: "", label: "Skill level" },
                { value: "all-skills", label: "All Skills" },
                { value: "active", label: "Active" },
                { value: "deactivated", label: "Deactivated" },
              ]}
            />
          </div>
        </div>
        <div className={classes.search}>
          <div className={classes["date-picker"]}>
            <CalendarIcon />
          </div>
          <div className={classes["search-input"]}>
            <input
              type="text"
              placeholder="Search by title or company name..."
            />
            <span className={classes["search-icon"]}>
              <SearchIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filteration;
