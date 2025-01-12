import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";

// Persist configuration
const persistConfig = {
  key: "root",
  storage, // Use localStorage
  whitelist: ["user"], // Only persist the user slice
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, userReducer);

// Configure the store
const appStore = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // Ignore redux-persist actions
      },
    }),
});

export const persistor = persistStore(appStore);
export default appStore;
