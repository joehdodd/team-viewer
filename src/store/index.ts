import { combineReducers, configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import teams from "./slices/teams";

import apiClient from "../lib/apiClient";

const reducer = combineReducers({
  teams,
});

const getStore = () => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { api: apiClient },
        },
      }),
  });

  return store;
};

const store = getStore();

export type RootState = ReturnType<typeof reducer>;
export type Dispatch = typeof store.dispatch;
export type Thunk = ThunkAction<void, RootState, unknown, Action<string>>;
export default store;
