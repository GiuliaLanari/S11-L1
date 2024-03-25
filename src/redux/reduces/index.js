const initialState = {
  jobs: {
    preferiti: [],
  },
};

const mainReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_PREFERITI":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          preferiti: state.jobs.preferiti.concat(action.payload),
        },
      };
    case "DELETE_FROM_PREFERITI":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          preferiti: state.jobs.preferiti.filter((job, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
