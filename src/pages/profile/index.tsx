import React, { Component } from "react";
import Layout from "../../components/Layout";
import { getUserLoggedin, getUserData } from "../../api/userlocalstorage";
import { deleteUser, logoutUser, updateUser } from "../../api/user";
import Router from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faPencilAlt);

import profileface from "../../assets/profilepic.png";
import "./styles/profile.scss";
const isClient = typeof document !== "undefined";

interface IProps {}

interface IState {
  editMode: boolean;
  oldUsername: string;
  username: string;
  password: string;
  email: string;
  profilePicture: string;
  hover: boolean;
  error: string;
}

// const [editMode, setEditMode] = useState(false);
// const [oldUsername, setOldUsername] = useState("");
// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");
// const [email, setEmail] = useState("");
// const [profilePicture, setProfilePicture] = useState("");
// const [hover, setHover] = useState(true);
// const [error, setError] = useState(null);


export default class profile extends Component <IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      editMode: false,
      oldUsername: "",
      username: "",
      email: "",
      profilePicture: "",
      password: "",
      hover: true,
      error: null,
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  componentDidMount() {
    //if user is not logged in redirect
    if (!getUserLoggedin()) Router.push("/login");
    else {
      // get user obj from localstorage
      getUserData((res) => {
        let { username, email, profilePicture, password } = res;
        this.setState({
          username,
          password,
          oldUsername: username,
          email,
          profilePicture:
            profilePicture && profilePicture.length > 0
              ? profilePicture
              : profileface,
        });
      });
    }
  }

  handleUsernameChange(event: any) {
    this.setState({ username: event.target.value });
  }

  handleEmailChange(event: any) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event: any) {
    this.setState({ password: event.target.value });
  }

  handleHover(hover: boolean) {
    this.setState({ hover: !hover });
  }

  toggleEditMode(editMode: boolean) {
    this.setState({ editMode: !editMode });
  }

  updateUserData(e: any) {
    updateUser(
      e,
      this.state.oldUsername,
      this.state.username,
      this.state.password,
      this.state.email,
      this.state.profilePicture,
      (res) => {
        if (res && res.error) this.setState(res);
        else {
          // go bac kfrom edit view to overview
          this.state.editMode && this.setState({ editMode: false });
          // remove error text
          this.state.error && this.setState({ error: null });
          //update state
          let { username, email, profilePicture, password } = res.data;
          this.setState({
            username,
            password,
            oldUsername: username,
            email,
            profilePicture:
              profilePicture && profilePicture.length > 0
                ? profilePicture
                : profileface,
          });
        }
      }
    );
  }

  render() {
    if (!getUserLoggedin() && isClient) Router.push("/login");

    return (
      <Layout>
        <div className="profile-container card border-primary mb-3">
          <div className="card-body">
            {!this.state.editMode ? (
              <div>
                <img src={profileface} alt="Profilememes" />

                <div>
                  <button
                    className="btn btn-outline-primary logout"
                    onClick={() => logoutUser()}
                  >
                    Logout
                  </button>
                </div>
                <div className="right">
                  <h4
                    className="card-title"
                    onClick={() => this.toggleEditMode(this.state.editMode)}
                    onMouseEnter={() => this.handleHover(this.state.hover)}
                    onMouseOut={() => this.handleHover(this.state.hover)}
                  >
                    {this.state.username}
                    {this.state.hover && <FontAwesomeIcon icon="pencil-alt" />}
                  </h4>
                  <p
                    className="card-text"
                    onClick={() => this.toggleEditMode(this.state.editMode)}
                    onMouseEnter={() => this.handleHover(this.state.hover)}
                    onMouseOut={() => this.handleHover(this.state.hover)}
                  >
                    ******************
                    {this.state.hover && <FontAwesomeIcon icon="pencil-alt" />}
                  </p>
                  {this.state.email && this.state.email != "" ? (
                    <p
                      className="card-text"
                      onClick={() => this.toggleEditMode(this.state.editMode)}
                      onMouseEnter={() => this.handleHover(this.state.hover)}
                      onMouseOut={() => this.handleHover(this.state.hover)}
                    >
                      {this.state.email}
                      {this.state.hover && (
                        <FontAwesomeIcon icon="pencil-alt" />
                      )}
                    </p>
                  ) : (
                    <p
                      className="card-text"
                      onClick={() => this.toggleEditMode(this.state.editMode)}
                      onMouseEnter={() => this.handleHover(this.state.hover)}
                      onMouseOut={() => this.handleHover(this.state.hover)}
                    >
                      Set an email now and gain glory and fortunes
                      <FontAwesomeIcon icon="pencil-alt" />
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="edit">
                <div className="right">
                  <form>
                    {this.state.error && (
                      <p className="error">{this.state.error}</p>
                    )}
                    <label htmlFor="username">Username</label>
                    <input
                      className="card-text form-control mr-sm-2"
                      type="text"
                      name="username"
                      onChange={this.handleUsernameChange}
                      defaultValue={this.state.username}
                      autoFocus
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      className="card-text form-control mr-sm-2"
                      type="text"
                      name="password"
                      onChange={this.handlePasswordChange}
                      placeholder={"******************"}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      className="card-text form-control mr-sm-2"
                      type="text"
                      name="email"
                      onChange={this.handleEmailChange}
                      placeholder={"email@email.com"}
                      defaultValue={this.state.email}
                      autoFocus
                    />
                    <input
                      className="btn btn-danger"
                      type="cancel"
                      onClick={() => this.toggleEditMode(this.state.editMode)}
                      value="Cancel"
                    />
                    <input
                      className="btn btn-success"
                      type="submit"
                      onClick={(e) => this.updateUserData(e)}
                      value="Update"
                    />
                  </form>
                </div>
                <div className="delete-user">
                  <h4>Delete user</h4>
                  <p>
                    By deleting your user you remove it completely with all its
                    data and you will have no way of logging back in without
                    making a complete new user.
                  </p>
                  <button
                    onClick={() => deleteUser(this.state.username)}
                    className="btn btn-warning"
                  >
                    Delete user {this.state.username}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}
