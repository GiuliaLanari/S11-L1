import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import favourites from "../reducers/favourites";
import resoultsJobSearch from "../reducers/resoultsJobSearch";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const unifiedReducer = combineReducers({
  job: favourites,
  search: resoultsJobSearch,
});

const persistedReducer = persistReducer(persistConfig, unifiedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
const persistor = persistStore(store);

export { store, persistor };
