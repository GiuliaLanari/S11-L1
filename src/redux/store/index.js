import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import favourites from "../reducers/favourites";
import resoultsJobSearch from "../reducers/resoultsJobSearch";

const unifiedReducer = combineReducers({
  job: favourites,
  search: resoultsJobSearch,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
