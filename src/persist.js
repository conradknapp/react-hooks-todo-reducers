import React from "react";

export const persistContext = (context, key = "state") => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return context;
};

export const persistReducer = ([state, dispatch], key = "state") => {
  React.useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [
    state
  ]);
  return [state, dispatch];
};
