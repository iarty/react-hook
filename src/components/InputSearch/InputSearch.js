import React, { useContext, useState } from "react";
import { AlertContext } from "../../context/Alert/alertContext";
import { GithubContext } from "../../context/Github/githubContext";

const InputSearch = () => {
  const [value, setValue] = useState("");
  const { showAlert } = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = e => {
    if (e.key !== "Enter") {
      return null;
    }
    github.clearUsers();
    if (value.trim()) {
      github.search(value.trim());
    } else {
      showAlert("Enter username");
    }
  };

  return (
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Github Search</label>
      <input
        type="text"
        className="form-control"
        id="SearchInput"
        placeholder="Enter username"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  );
};

export default InputSearch;
