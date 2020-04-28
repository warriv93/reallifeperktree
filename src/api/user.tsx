import axios from "axios";
import { setUserLoggedin, logout } from "../api/userlocalstorage";
import Router from "next/router";

function authenticateUserLogin(username: string, password: string, callback: any) {
  axios
    .post("http://127.0.0.1:1337/user/login", {
      username: username,
      password: password,
    })
    .then((response) => {
      // set the user data and boolean loggedin into localstorage
      setUserLoggedin(response.data);
      Router.push("/perktree");
    })
    .catch(function (error) {
      console.error(error);
      callback({ wrongPasswordOrUsername: true })
    });
}

// Request a user based on username and password, if anything is found pass it back up to parent
function createUser(username: string, password: string, email: string, callback: any) {
    axios
      .post("http://127.0.0.1:1337/user/new", {
        username: username,
        password: password,
        email: email,
        profilePicture: "",
      })
      .then((response) => {
        if (response.data.error) {
            callback({ error: response.data.error });
        } 
        else {
          delete response.data._id;
          // set the user data and boolean loggedin into localstorage
          setUserLoggedin(response.data);
          Router.push("/perktree");
        }
      })
      .catch(function (error) {
        console.error(error);
        callback({ error: error });
      });
  }

  function deleteUser(username: string) {
    axios
      .get(`http://127.0.0.1:1337/user/find/${username}`)
      .then((res) => {
        let userid = res.data[0]._id;
        axios
          .delete(`http://127.0.0.1:1337/user/delete/${userid}`)
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
    axios.get("http://127.0.0.1:1337/user/logout");
    logout();
    Router.push("/perktree");
  }

  function updateUser(event: any, oldUsername: string, username: string, password: string, email:string, profilePicture: string, callback: any) {
    console.log("before req: ", oldUsername, username, password);
    event.preventDefault();
    // check if username already exist in database
    axios
      .put(`http://127.0.0.1:1337/user/update/${oldUsername}`, {
        username: username,
        password: password,
        email: email,
        profilePicture: profilePicture
      })
      .then((response) => {
          if(response && response.data.name == "MongoError" && response.data.code == 11000) {
            callback({ error: "Username already taken" })
          }
          else if(response && response.data.error) {
            callback({ error: "Error" })
            logoutUser()
          }
          else {
            // TODO: update localstorage userdata
            delete response.data._id;
            response.data.username = username
            console.log("Successfully updated user", response.data);

            // set the user data and boolean loggedin into localstorage
            setUserLoggedin(response.data);
            callback({ data: response.data })
          }
        // id not found
      })
      .catch((err) => {
        console.error(err);
        callback({ error: err })
      });
  }

export { authenticateUserLogin, createUser, deleteUser, logoutUser, updateUser };
