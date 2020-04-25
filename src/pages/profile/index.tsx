import React, { Component } from "react";
import Layout from "../../components/Layout";
import { getUserLoggedin, getUserData, logout } from "../../api/user";
import Router from "next/router";
import axios from "axios";

// import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faPencilAlt);

import profileface from "../../assets/profilepic.png";
import "./styles/profile.scss";

interface IProps {}

interface IState {
  editMode: boolean;
  username: string;
  password: string;
  email: string;
  profilePicture: string;
  hover: boolean;
}

export default class profile extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      editMode: false,
      username: "____Username Placeholder____",
      email: "",
      profilePicture: "",
      password: "******************",
      hover: true,
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  componentDidMount() {
    //if user is not logged in redirect
    if (!getUserLoggedin()) Router.push("/login");
    else {
      // get user obj from localstorage
      getUserData((res) => {
        let { username, email, profilePicture } = res;
        this.setState({
          username,
          email: email && email.length > 0 ? email : "email@email.com",
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

  handleSubmit(event: any) {
    console.log(event, "submitted", this.state.username, this.state.password);
    event.preventDefault();
    // check if username already exist in database


    // TODO: change values in database UPDATE FUNCTION
    // update localstorage userdata
  }

  updateUserdata () {

  }

  toggleEditMode(editMode: boolean) {
    this.setState({ editMode: !editMode });
  }

  logout() {
    axios.get("http://127.0.0.1:1337/user/logout");
    logout();
    Router.push("/perktree");
  }

  deleteUser() {
    axios.get(`http://127.0.0.1:1337/user/find/${this.state.username}`).then((res) => {
      let userid = res.data[0]._id;
      axios.delete(`http://127.0.0.1:1337/user/delete/${userid}`).then((res) => {
        if (res) {
          logout();
          Router.push("/perktree");
        }
        // id not found
      }).catch((err) => {
        console.error(err);
        alert("User not found")
      });
      //username not found
    }).catch((err) => {
      console.error(err);
      alert("User not found")
    });
  }

  render() {
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
                    onClick={() => this.logout()}
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
                    {this.state.password}
                    {this.state.hover && <FontAwesomeIcon icon="pencil-alt" />}
                  </p>
                  {this.state.email && this.state.email != "email@email.com" ? (
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
                    <label htmlFor="username">Username</label>
                    <input
                      className="card-text form-control mr-sm-2"
                      type="text"
                      name="username"
                      onChange={this.handleUsernameChange}
                      defaultValue={this.state.username}
                      autoFocus
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      className="card-text form-control mr-sm-2"
                      type="text"
                      name="email"
                      onChange={this.handleEmailChange}
                      defaultValue={this.state.email}
                      autoFocus
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      className="card-text form-control mr-sm-2"
                      type="text"
                      name="password"
                      onChange={this.handlePasswordChange}
                      defaultValue={this.state.password}
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
                  <button onClick={() => this.deleteUser()} className="btn btn-warning">
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
