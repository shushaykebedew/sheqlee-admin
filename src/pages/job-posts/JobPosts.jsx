import { createContext, useReducer } from "react";
import JobPostsTable from "./job-posts-table/JobPostsTable";
import classes from "./jobposts.module.css";
import { dummyJobPosts } from "./data";
import Filteration from "./filteration/Filteration";

export const JobsContext = createContext();

const jobPostsReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER": {
      const { filterType, filterValue } = action.payload;

      const updatedFilters = {
        ...state.filters,
        [filterType]: filterValue,
      };

      const filteredJobs = dummyJobPosts.filter((jobPost) =>
        Object.entries(updatedFilters).every(([key, value]) => {
          if (value.startsWith("all-") || !value) return true;
          const jobValue = jobPost[key]?.toLowerCase() || "";
          return jobValue === value.toLowerCase();
        })
      );

      return { ...state, filters: updatedFilters, filteredJobs };
    }

    case "SET_SEARCH": {
      const searchQuery = action.payload;

      if (!searchQuery.trim()) {
        return { ...state, searchQuery };
      }

      const searchedJobs = state.filteredJobs.filter((jobPost) => {
        const jobTitle = jobPost.title?.toLowerCase() || "";
        const companyName = jobPost.company?.toLowerCase() || "";
        const query = searchQuery.toLowerCase();

        return jobTitle.includes(query) || companyName.includes(query);
      });

      return { ...state, searchQuery, filteredJobs: searchedJobs };
    }

    default:
      console.error(`Unhandled action type: ${action.type}`);
      return state;

    case "SET_DATE_RANGE": {
      const { startDate, endDate } = action.payload;

      const filteredByDate = dummyJobPosts.filter((jobPost) => {
        const jobDate = new Date(jobPost.postDate); // Assuming `postedDate` exists in job posts
        if (startDate && jobDate < new Date(startDate)) return false;
        if (endDate && jobDate > new Date(endDate)) return false;
        return true;
      });

      return {
        ...state,
        dateRange: { startDate, endDate },
        filteredJobs: filteredByDate,
      };
    }
  }
};

function JobPosts() {
  const initialState = {
    filters: {},
    searchQuery: "",
    dateRange: { startDate: null, endDate: null },
    filteredJobs: dummyJobPosts,
  };

  const [state, dispatch] = useReducer(jobPostsReducer, initialState);

  const handleFilterChange = (filterCriteria) => {
    const [filterType, filterValue] = filterCriteria.split(":");
    dispatch({ type: "SET_FILTER", payload: { filterType, filterValue } });
  };

  const handleSearchChange = (searchValue) => {
    dispatch({ type: "SET_SEARCH", payload: searchValue });
  };

  const handleDateRangeChange = (startDate, endDate) => {
    dispatch({ type: "SET_DATE_RANGE", payload: { startDate, endDate } });
  };

  return (
    <JobsContext.Provider
      value={{
        onFilterChange: handleFilterChange,
        onSearchChange: handleSearchChange,
        dummyJobPosts: state.filteredJobs,
        onApply: (startDate, endDate) =>
          handleDateRangeChange(startDate, endDate),
      }}
    >
      <div className={classes["job-posts"]}>
        <div className={classes["filters"]}>
          <Filteration />
        </div>
        <div className="job-posts-table">
          <JobPostsTable />
        </div>
      </div>
    </JobsContext.Provider>
  );
}

export default JobPosts;
