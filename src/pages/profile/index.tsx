import React, { Component } from "react";
import Layout from "../../components/Layout";

import "./styles/profile.scss";
import profileface from "../../assets/vaultboyface.png";

interface IProps {}

interface IState {
  editMode: boolean;
  username: string;
  password: string;
}

export default class profile extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      editMode: false,
      username: "____Username Placeholder____",
      password: "____Password Placeholder____"
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event: any) {
    this.setState({ username: event.target.value });
  }
  handlePasswordChange(event: any) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event: any) {
    console.log("submitted", this.state.username, this.state.password);
    event.preventDefault();
    // TODO: change values in database
    // check if username already exist in database
  }

  toggleEditMode() {
    console.log("editmode active");

    this.setState({ editMode: true });
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
                  onClick={() => this.toggleEditMode()}
                >
                  {this.state.username}
                </h4>
                <p className="card-text">*************************</p>
              </div>
            ) : (
              <div className="right">
                <form>
                  <input
                    className="card-title"
                    type="text"
                    name="name"
                    onChange={this.handleUsernameChange}
                    value={this.state.username}
                  ></input>
                  <input
                    className="card-text"
                    type="text"
                    name="name"
                    onChange={this.handlePasswordChange}
                    value={this.state.password}
                  ></input>
                  <input type="submit" value="Done" />
                </form>
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}
