import { GET_JOBS } from "../actions";

const initialState = {
  searchJobs: [],
};

const resoultsJobSearch = function (state = initialState, action) {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        searchJobs: action.payload,
      };
    default:
      return state;
  }
};

export default resoultsJobSearch;
