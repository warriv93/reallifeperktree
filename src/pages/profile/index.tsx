import React, { Component } from "react";
import Layout from "../../components/Layout";
// import { fab } from '@fortawesome/free-brands-svg-icons'
import "./styles/profile.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faPencilAlt)

import profileface from "../../assets/vaultboyface.png";

interface IProps {}

interface IState {
  editMode: boolean;
  username: string;
  password: string;
  hover: boolean;
}

export default class profile extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      editMode: false,
      username: "____Username Placeholder____",
      password: "____Password Placeholder____",
      hover: false
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleUsernameChange(event: any) {
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
              <div 
                className="right"
              >
                <h4 
                  className="card-title"
                  onClick={() => this.toggleEditMode(this.state.editMode)}
                  onMouseEnter={() => this.handleHover(this.state.hover)}
                  onMouseOut={() => this.handleHover(this.state.hover)}
                >
                  {this.state.username}
                  {this.state.hover && <FontAwesomeIcon icon='pencil-alt' />}
                </h4>
                <p
                  className="card-text"
                  onClick={() => this.toggleEditMode(this.state.editMode)}
                  onMouseEnter={() => this.handleHover(this.state.hover)}
                  onMouseOut={() => this.handleHover(this.state.hover)}
                >
                  *************************
                  {this.state.hover && <FontAwesomeIcon icon='pencil-alt' />}
                </p>
              </div>
            ) : (
              <div className="right">
                <form>
                  <input
                    className="card-title form-control mr-sm-2"
                    type="text"
                    name="name"
                    onChange={this.handleUsernameChange}
                    value={this.state.username}
                    autoFocus
                  />
                  <input
                    className="card-text form-control mr-sm-2"
                    type="text"
                    name="name"
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
          </div>
        </div>
      </Layout>
    );
  }
}
