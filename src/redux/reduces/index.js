const initialState = {
  jobs: {
    preferiti: [],
  },
};

const mainReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD-TO-PTREFERITI":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          preferiti: state.jobs.preferiti.concat(action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
