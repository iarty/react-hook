import React, { useContext } from "react";
import { MDBContainer, MDBAlert } from "mdbreact";
import { AlertContext } from "../../context/Alert/alertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  if (!alert) return null;

  return (
    <MDBContainer>
      <MDBAlert color={alert.color || "warning"} dismiss>
        <strong>{alert.text}</strong>
      </MDBAlert>
    </MDBContainer>
  );
};

export default Alert;
