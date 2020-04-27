import * as React from "react";
import "../../styles/index.scss";
import { createUser } from "../../../../api/user";

type Props = {
};

type State = {
  username: string;
  password: string;
  email: string;
  error: string;
};
class Newuser extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      error: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  // When username input value is changed update the state
  handleChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  // When password input value is changed update the state
  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  // when submitting call authenticateUserLogin to make the request to the server
  onSubmit(e) {
    e.preventDefault();

    let { username, password, email } = this.state;

    //if username and password both have strings with value run the authenticateUserLogin function otherwise show error message
    username != "" && password != ""
      ? createUser(username, password, email, (res) => {
        this.setState(res);
      })
      : this.setState({ error: "Please fill out username and password" });
  }

  render() {
    return (
      <div className="login-container">
        {/* <h3>Welcome!</h3>
        <p>Create a new user</p> */}
        {this.state.error.length > 0 && (
          <p className="error">{this.state.error}</p>
        )}
        <form onSubmit={this.onSubmit}>
          <input
            type="username"
            placeholder="Username"
            onChange={this.handleChangeUsername}
            name="username"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={this.handleChangePassword}
            name="password"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={this.handleChangeEmail}
            name="email"
          />
          <button className="btn">Create user</button>
        </form>
      </div>
    );
  }
}

export default Newuser;
