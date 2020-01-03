import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";
import { Link } from "react-router-dom";

const UserCard = ({user}) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "21rem", marginTop: 30 }}>
        <MDBCardImage
          className="img-fluid"
          src={user.avatar_url}
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>{user.login}</MDBCardTitle>
          <MDBCardText>
           <strong>id:</strong><span> {user.id}</span><br/>
           <strong>type:</strong><span> {user.type}</span><br/>
           <strong>score</strong><span> {user.score}</span><br/>
          </MDBCardText>
          <Link to={"/profile/" + user.login}>Read more >>></Link>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default UserCard;
