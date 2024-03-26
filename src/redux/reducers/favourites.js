import { ADD_TO_PREFERITI, DELETE_FROM_PREFERITI } from "../actions";

const initialState = {
  preferiti: [],
};

const favourites = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_PREFERITI:
      return {
        ...state,
        preferiti: state.preferiti.concat(action.payload),
      };
    case DELETE_FROM_PREFERITI:
      return {
        ...state,
        preferiti: state.preferiti.filter((job, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default favourites;
