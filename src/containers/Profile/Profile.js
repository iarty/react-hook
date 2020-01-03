import React, { useContext, useEffect } from "react";
import { MDBCard, MDBCardTitle, MDBContainer, MDBCardImage } from "mdbreact";
import { GithubContext } from "../../context/Github/githubContext";
import { Link } from "react-router-dom";

const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlName = match.params.name;
  console.log(repos);
  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <MDBContainer>
      <MDBCard
        className="card-body"
        style={{ width: "70rem", marginTop: "1rem" }}
      >
        <div className="d-flex">
          <div>
            <MDBCardTitle className="text-center">{user.login}</MDBCardTitle>
            <MDBCardImage src={user.avatar_url} style={{ width: 200 }} />
          </div>
          <div className="p-5">
            <div>
              {user.name ? (
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
              ) : (
                <p>
                  <strong>Name: </strong>No name
                </p>
              )}
              {user.bio && (
                <p>
                  <strong>BIO:</strong> {user.bio}
                </p>
              )}
              <hr />
              {user.location && (
                <p>
                  <strong>Location:</strong> {user.location}
                </p>
              )}
              {user.company && (
                <p>
                  <strong>Company:</strong> {user.company}
                </p>
              )}
              {user.email && (
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
              )}
              {user.public_repos && (
                <p>
                  <strong>Public repos:</strong> {user.public_repos}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex-row mt-5 text-right">
          <Link to="/" style={{ marginLeft: "1.25rem" }}>
            Home
          </Link>
          <a href={user.html_url} style={{ marginLeft: "1.25rem" }}>
            Go to github
          </a>
        </div>
      </MDBCard>
      <h1 className="mt-5">Repos</h1>
      <div className="d-flex flex-wrap">
        {repos.map((repo, index) => (
          <div key={index} className="p-3 m-3 border rounded">
            <h4>{repo.name}</h4>
            {repo.decription && <p>{repo.description}</p>}
            <a href={repo.html_url}>Open project</a>
          </div>
        ))}
      </div>
    </MDBContainer>
  );
};

export default Profile;
