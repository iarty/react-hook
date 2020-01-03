import {  SHOW_ALERT } from "../types";

const handlers = {
  [SHOW_ALERT]: (state, action) => action.payload,
  DEFAULT: state => state
};

export const alertReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
