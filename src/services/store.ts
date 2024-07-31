import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { wordsReducer } from "./reducers/words-reducer";

const rootReducer = combineReducers({ wordsData: wordsReducer });

export function setupStore() {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
}

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
