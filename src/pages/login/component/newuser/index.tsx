import React, { useState } from "react";
import { createUser } from "../../../../api/user";

export default function Newuser(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // When username input value is changed update the state
  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  // When password input value is changed update the state
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  // when submitting call authenticateUserLogin to make the request to the server
  function onSubmit(e) {
    e.preventDefault();

    //if username and password both have strings with value run the authenticateUserLogin function otherwise show error message
    username != "" && password != ""
      ? createUser(username, password, email).then((res) => {
          res && res.error && setError(res.error);
        })
      : setError("Please fill out username and password");
  }

  return (
    <div className="login-container">
      {/* <h3>Welcome!</h3>
      <p>Create a new user</p> */}
      {error.length > 0 && <p className="error">{error}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="username"
          placeholder="Username"
          onChange={handleChangeUsername}
          name="username"
          autoFocus
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChangePassword}
          name="password"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChangeEmail}
          name="email"
        />
        <button className="btn">Create user</button>
      </form>
    </div>
  );
}
