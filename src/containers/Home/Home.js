import React, { Fragment, useContext } from "react";
import InputSearch from "../../components/InputSearch/InputSearch";
import UserCard from "../../components/UserCard/UserCard";
import { GithubContext } from "../../context/Github/githubContext";

export default () => {
  const { loading, users } = useContext(GithubContext);
  return (
    <Fragment>
      <InputSearch />
      <div className="d-flex flex-wrap">
        {loading ? (
          <div>loading...</div>
        ) : (
          users.map((user, index) => <UserCard key={index} user={user}/>)
        )}
      </div>
    </Fragment>
  );
};
