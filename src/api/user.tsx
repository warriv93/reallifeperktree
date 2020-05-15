import axios from "axios";
import {
  setUserLoggedin,
  logout,
  getUserData,
  updateUserData,
} from "../api/userlocalstorage";
import { perkList } from "../api/";
import Router from "next/router";
import Toast from "../components/toast";

// check if production live, or dev
let url =
  process.env.NODE_ENV && process.env.NODE_ENV == "production"
    ? "https://api-reallifeperktree.herokuapp.com/"
    : "http://127.0.0.1:1337/";

function authenticateUserLogin(
  username: string,
  password: string,
  callback: any
) {
  axios
    .post(url + "user/login", {
      username: username,
      password: password,
    })
    .then((response) => {
      // set the user data and boolean loggedin into localstorage
      getUserbyUsername(response.data.username, (res) => {
        setUserLoggedin(res.data[0]);
        Router.push("/perktree");
        Toast("Successfully logged in");
      });
    })
    .catch(function (error) {
      console.error(error);
      callback({ wrongPasswordOrUsername: true });
    });
}

// Request a user based on username and password, if anything is found pass it back up to parent
function createUser(
  username: string,
  password: string,
  email: string,
  callback: any
) {
  axios
    .post(url + "user/new", {
      username: username,
      password: password,
      email: email,
      profilePicture: "",
      perks: perkList,
    })
    .then((response) => {
      if (response.data.error) {
        callback({ error: response.data.error });
      } else {
        delete response.data._id;
        // set the user data and boolean loggedin into localstorage
        setUserLoggedin(response.data);
        Router.push("/perktree");
        Toast("Successfully logged in");
      }
    })
    .catch(function (error) {
      console.error(error);
      callback({ error: error });
    });
}

function getUserbyUsername(username: string, callback) {
  axios
    .get(url + `user/find/${username}`)
    .then((res) => {
      callback(res);
      //username not found
    })
    .catch((err) => {
      console.error(err);
      alert("User not found");
    });
}

function deleteUser(username: string) {
  axios
    .get(url + `user/find/${username}`)
    .then((res) => {
      let userid = res.data[0]._id;
      axios
        .delete(url + `user/delete/${userid}`)
        .then((res) => {
          if (res) {
            logout();
            Router.push("/perktree");
          }
          // id not found
        })
        .catch((err) => {
          console.error(err);
          alert("User not found");
        });
      //username not found
    })
    .catch((err) => {
      console.error(err);
      alert("User not found");
    });
}

function logoutUser() {
  axios.get(url + "user/logout");
  logout();
  Router.push("/perktree");
  Toast("Successfully logged out");
}

function updateUser(
  oldUsername: string,
  username: string,
  password: string,
  email: string,
  profilePicture: string,
  callback: any
) {
  console.log("before req: ", oldUsername, username, password);
  // check if username already exist in database
  axios
    .put(url + `user/update/${oldUsername}`, {
      username: username,
      password: password,
      email: email,
      profilePicture: profilePicture,
    })
    .then((response) => {
      if (
        response &&
        response.data.name == "MongoError" &&
        response.data.code == 11000
      ) {
        callback({ error: "Username already taken" });
      } else if (
        (response && response.data.length <= 0) ||
        (response && response.data.error)
      ) {
        callback({ error: "Error" });
        logoutUser();
      } else {
        console.log("Successfully updated user", response.data);
        Toast("Successfully updated user");
        // set the user data and boolean loggedin into localstorage
        setUserLoggedin(response.data);
        callback({ data: response.data });
      }
      // id not found
    })
    .catch((err) => {
      console.error(err);
      callback({ error: err });
    });
}

function updatePerk(title, level, callback) {
  getUserData((user) => {
    console.log(user.username, title, level);

    axios
      .put(url + `user/updateperk/${user.username}`, {
        title: title,
        level: level,
      })
      .then((response) => {
        if (
          (response && response.data.length <= 0) ||
          (response && response.data.error)
        ) {
          callback({ error: "Error" });
        } else {
          axios
            .get(url + `user/find/${user.username}`)
            .then((res) => {
              if (res.data && res.data.length > 0) {
                let newUserdata = res.data[0];
                Toast(
                  `Your ${title} perk is now level  
                  ${
                    newUserdata.perks.find((perk) => perk.title == title).level
                  }`
                );
                callback({ data: newUserdata });
                updateUserData(newUserdata);
              }
            })
            .catch((err) => {
              console.error(err);
              callback({ error: err });
            });
        }
      })
      .catch((err) => {
        console.error(err);
        callback({ error: err });
      });
  });
}

export {
  authenticateUserLogin,
  createUser,
  deleteUser,
  logoutUser,
  updateUser,
  getUserbyUsername,
  updatePerk,
};
