import React, { useState, useEffect } from "react";
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

export default function profile (props) {
  const [editMode, setEditMode] = useState(false);
  const [oldUsername, setOldUsername] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [hover, setHover] = useState(true);
  const [error, setError] = useState(null);

  // https://reactjs.org/docs/hooks-effect.html
  // handles component mount and update
  useEffect(() => {
    //if user is not logged in redirect
    if (!getUserLoggedin() && isClient) Router.push("/login");
    else {
      // get user obj from localstorage
      getUserData((res) => {
        let { username, email, profilePicture, password } = res;
        setUsername(username)
        setPassword(password)
        setOldUsername(username)
        setEmail(email)
        setProfilePicture(profilePicture && profilePicture.length > 0 ? profilePicture : profileface)
      });
    }
    return () => {
      // ComponentDidUnmount code here
    }
    //condition for when the update should run
    // in this case only if userloggin variable changes (if user logout for example)
  }, [getUserLoggedin])
  
  function handleUsernameChange(event) {
    setUsername(event.target.value)
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  function handleHover() {
    setHover(!hover)
  }

  function toggleEditMode() {
    setEditMode(!editMode)
  }

  function updateUserData(e) {
    e.preventDefault();
    console.log("before bef req: ", oldUsername, username, password);
    
    updateUser(
      oldUsername,
      username,
      password,
      email,
      profilePicture,
      (res) => {
        if (res && res.error) setError(res.error);
        else {
          // go bac kfrom edit view to overview
          editMode && setEditMode(false)
          // remove error text
          error && setError(null);
          //update state
          let { username, email, profilePicture, password } = res.data;
          setUsername(username)
          setPassword(password)
          setOldUsername(username)
          setEmail(email)
          setProfilePicture(profilePicture && profilePicture.length > 0 ? profilePicture : profileface)
        }
      }
    );
  }

  return (
    <Layout>
      <div className="profile-container card border-primary mb-3">
        <div className="card-body">
          {!editMode ? (
            <div>
              <img src={profileface} alt="Profilememes" />

              <div>
                <button
                  className="btn btn-outline-primary logout"
                  onClick={logoutUser}
                >
                  Logout
                </button>
              </div>
              <div className="right">
                <h4
                  className="card-title"
                  onClick={toggleEditMode}
                  onMouseEnter={handleHover}
                  onMouseOut={handleHover}
                >
                  {username}
                  {hover && <FontAwesomeIcon icon="pencil-alt" />}
                </h4>
                <p
                  className="card-text"
                  onClick={toggleEditMode}
                  onMouseEnter={handleHover}
                  onMouseOut={handleHover}
                >
                  ******************
                  {hover && <FontAwesomeIcon icon="pencil-alt" />}
                </p>
                {email && email != "" ? (
                  <p
                    className="card-text"
                    onClick={toggleEditMode}
                    onMouseEnter={handleHover}
                    onMouseOut={handleHover}
                  >
                    {email}
                    {hover && (
                      <FontAwesomeIcon icon="pencil-alt" />
                    )}
                  </p>
                ) : (
                  <p
                    className="card-text"
                    onClick={toggleEditMode}
                    onMouseEnter={handleHover}
                    onMouseOut={handleHover}
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
                  {error && (
                    <p className="error">{error}</p>
                  )}
                  <label htmlFor="username">Username</label>
                  <input
                    className="card-text form-control mr-sm-2"
                    type="text"
                    name="username"
                    onChange={handleUsernameChange}
                    defaultValue={username}
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    className="card-text form-control mr-sm-2"
                    type="text"
                    name="password"
                    onChange={handlePasswordChange}
                    placeholder={"******************"}
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    className="card-text form-control mr-sm-2"
                    type="text"
                    name="email"
                    onChange={handleEmailChange}
                    placeholder={"email@email.com"}
                    defaultValue={email}
                    autoFocus
                  />
                  <input
                    className="btn btn-danger"
                    type="cancel"
                    onClick={toggleEditMode}
                    value="Cancel"
                  />
                  <input
                    className="btn btn-success"
                    type="submit"
                    onClick={updateUserData}
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
                  onClick={() => deleteUser(username)}
                  className="btn btn-warning"
                >
                  Delete user {username}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
