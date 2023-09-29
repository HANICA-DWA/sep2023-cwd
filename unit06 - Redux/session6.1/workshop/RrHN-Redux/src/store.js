import { configureStore } from "@reduxjs/toolkit";
import preferencesReducer from "./preferences.reducer";

export default configureStore({
  reducer: {
    preferences: preferencesReducer,
  },
});
