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

import profileface from "../../assets/vaultboyface.png";
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
      password: "******",
      hover: false,
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  componentDidMount() {
    if (!getUserLoggedin()) Router.push("/login");
    else {
      getUserData(res => {
        let {username, email, profilePicture} = res
        this.setState({
          username,
          email,
          profilePicture
        })
      })
    }
  }

  logout() {
    axios
      .get("http://127.0.0.1:1337/user/logout")
      logout();
      Router.push("/perktree");
  }

  handleUsernameChange(event: any) {
    this.setState({ username: event.target.value });
  }
  handleEmailChange(event: any) {
    this.setState({ username: event.target.value });
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
    // TODO: change values in database
    // check if username already exist in database
  }

  toggleEditMode(editMode: boolean) {
    this.setState({ editMode: !editMode });
  }

  render() {
    return (
      <Layout>
        <div className="profile-container card border-primary mb-3">
          <div className="card-header">Profile for {this.state.username}</div>
          <div className="card-body">
            <img src={profileface} alt="Profilememes" />

            {!this.state.editMode ? (
              <div className="right">
                <h4
                  className="card-title"
                  onClick={() => this.toggleEditMode(this.state.editMode)}
                  onMouseEnter={() => this.handleHover(this.state.hover)}
                  onMouseOut={() => this.handleHover(this.state.hover)}
                >
                  { this.state.username}
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
               {this.state.email && 
                <p
                    className="card-text"
                    onClick={() => this.toggleEditMode(this.state.editMode)}
                    onMouseEnter={() => this.handleHover(this.state.hover)}
                    onMouseOut={() => this.handleHover(this.state.hover)}
                  >
                    {this.state.email}
                    {this.state.hover && <FontAwesomeIcon icon="pencil-alt" />}
                  </p>
                }
              </div>
            ) : (
              <div className="right">
                <form>
                  <label htmlFor="username">Username</label>
                  <input
                    className="card-title form-control mr-sm-2"
                    type="text"
                    name="username"
                    onChange={this.handleUsernameChange}
                    value={this.state.username}
                    autoFocus
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    className="card-title form-control mr-sm-2"
                    type="text"
                    name="email"
                    onChange={this.handleEmailChange}
                    value={this.state.email}
                    autoFocus
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    className="card-text form-control mr-sm-2"
                    type="text"
                    name="password"
                    onChange={this.handlePasswordChange}
                    value={this.state.password}
                  />
                  <input
                    className="btn btn-success"
                    type="submit"
                    value="Update"
                  />
                  <input
                    className="btn btn-danger"
                    type="cancel"
                    onClick={() => this.toggleEditMode(this.state.editMode)}
                    value="Cancel"
                  />
                </form>
              </div>
            )}

            <button onClick={() => this.logout()}>Logout</button>
          </div>
        </div>
      </Layout>
    );
  }
}
