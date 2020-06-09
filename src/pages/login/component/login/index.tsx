import React, { useState } from "react";

import { authenticateUserLogin } from "../../../../api/user";

export default function Login(props) {
  const [wrongPasswordOrUsername, setWrongPasswordOrUsername] = useState(false);
  const [emptyPasswordOrUsername, setEmptyPasswordOrUsername] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // When username input value is changed update the state
  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  // When password input value is changed update the state
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  // when submitting call authenticateUserLogin to make the request to the server
  function onSubmit(e) {
    e.preventDefault();

    //If the emptyPasswordOrUsername error message was already shown -> hide it
    emptyPasswordOrUsername && setEmptyPasswordOrUsername(false);
    console.log(username, password);

    //if username and password both have strings with value run the authenticateUserLogin function otherwise show error message
    username != "" && password != ""
      ? authenticateUserLogin(username, password, (res) => {
          res.wrongPasswordOrUsername &&
            setWrongPasswordOrUsername(res.wrongPasswordOrUsername);
        })
      : setEmptyPasswordOrUsername(true);
  }

  return (
    <div className="login-container">
      {/* <h3>Login</h3>
      <p>Welcome back!</p> */}
      {wrongPasswordOrUsername && (
        <p className="error">Username or password was incorrect</p>
      )}
      {emptyPasswordOrUsername && (
        <p className="error">Username or password is empty</p>
      )}
      <form>
        <input
          type="username"
          placeholder="Username"
          name="username"
          onChange={handleChangeUsername}
          value={username}
          autoFocus
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChangePassword}
          value={password}
        />
      </form>
      <button className="btn" onClick={onSubmit}>
        Login
      </button>
    </div>
  );
}
