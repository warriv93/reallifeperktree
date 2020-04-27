import * as React from "react";

import "../../styles/index.scss";
import { authenticateUserLogin } from "../../../../api/user";

type Props = {
};

type State = {
  wrongPasswordOrUsername: boolean;
  emptyPasswordOrUsername: boolean;
  username: string;
  password: string;
};
class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      wrongPasswordOrUsername: false,
      emptyPasswordOrUsername: false,
      username: "",
      password: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  // When username input value is changed update the state
  handleChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  // When password input value is changed update the state
  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  // when submitting call authenticateUserLogin to make the request to the server
  onSubmit(e) {
    e.preventDefault();
    let { username, password, emptyPasswordOrUsername } = this.state;

    //If the emptyPasswordOrUsername error message was already shown -> hide it
    emptyPasswordOrUsername &&
      this.setState({ emptyPasswordOrUsername: false });

    //if username and password both have strings with value run the authenticateUserLogin function otherwise show error message
    username != "" && password != ""
      ? authenticateUserLogin(username, password, (res) => {
        this.setState(res);
      })
      : this.setState({ emptyPasswordOrUsername: true });
  }

  render() {
    return (
      <div className="login-container">
        {/* <h3>Login</h3>
        <p>Welcome back!</p> */}
        {this.state.wrongPasswordOrUsername && (
          <p className="error">Username or password was incorrect</p>
        )}
        {this.state.emptyPasswordOrUsername && (
          <p className="error">Username or password is empty</p>
        )}
        <form>
          <input
            type="username"
            placeholder="Username"
            name="username"
            onChange={this.handleChangeUsername}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleChangePassword}
          />
        </form>
        <button className="btn" onClick={this.onSubmit}>Login</button>
      </div>
    );
  }
}

export default Login;
