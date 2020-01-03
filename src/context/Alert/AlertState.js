import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { alertReducer } from "./alertReducer";
import { SHOW_ALERT } from "../types";

export default ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, null);

  const showAlert = (text, color = "secondary") =>
    dispatch({
      type: SHOW_ALERT,
      payload: { color, text }
    });

  return (
    <AlertContext.Provider value={{showAlert,alert:state}}>
      {children}
    </AlertContext.Provider>
  );
};
