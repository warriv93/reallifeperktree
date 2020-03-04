import React, { Component } from "react";
import Layout from "../components/Layout";
import Perk from "../components/Perk";

import "../style/profile.scss";
import profileface from "../assets/profileface2.jpg";

export default class profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
      username: '____Username Placeholder____',
      password: "____Password Placeholder____"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
                <h4 className="card-title">{this.state.username}</h4>
            <p className="card-text">{this.state.password}</p>
              </div>
            ) : (
              <div className="right">
                <form>
                  <input className="card-title" type="text" name="name" value={this.state.username}>
                    
                  </input>
                  <input className="card-text" type="text" name="name" value={this.state.password}>
                    
                  </input>
                </form>
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}
