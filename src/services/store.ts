import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

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
