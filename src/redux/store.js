import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import reducer from "./phoneBook-reduser";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: "my-contacts",
  storage,
  blacklist: ["filter"],
};

export const store = configureStore({
  reducer: {
    phoneBook: persistReducer(persistConfig, reducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(rootReduser, composeWithDevTools());
