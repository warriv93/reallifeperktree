import React, { Component } from "react";
import Layout from "../components/Layout";

import "../style/profile.scss";
import profileface from "../assets/profileface2.jpg";

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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    console.log(event.target.value);
    
    // this.setState({ value: event.target.value });

  }

  handleSubmit(event: any) {
    console.log("submitted");

    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  toggleEditMode() {
    console.log("editmode active");

    this.setState({ editMode: true });
  }

  render() {
    return (
      <Layout>
        <div className="profile-container card border-primary mb-3">
          <div className="card-header">Profile for ____USERNAME TODO_____</div>
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
                <p className="card-text">{this.state.password}</p>
              </div>
            ) : (
              <div className="right">
                <form>
                  <input
                    className="card-title"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.username}
                  ></input>
                  <input
                    className="card-text"
                    type="text"
                    name="name"
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
