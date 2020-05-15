// MANAGE CACHE VALUE

import { reactLocalStorage } from "reactjs-localstorage";
import { getPerk } from "./index";
// reactLocalStorage.set("var", true);
// reactLocalStorage.get("var", true);
// reactLocalStorage.setObject("var", { test: "test" });
// reactLocalStorage.getObject("var");
// reactLocalStorage.remove("var");
// reactLocalStorage.clear();

// API Guide
// --- https://www.npmjs.com/package/reactjs-localstorage

// reactLocalStorage.set(key, value)
// reactLocalStorage.get(key, deafultValue=undefined, silent=true)
// reactLocalStorage.setObject(key, object)
// reactLoacStorage.getObject(key, defaultValue={}, silent=true)
// reactLocalStorage.remove(key)
// reactLocalStorage.clear()

// silent:
// true: Will not throw exception instead will return defaultValue
// false: Will throw exception
const isClient = typeof document !== "undefined";

// login user
// if frontend check,
// set new "loggedin", set userdata object (if already exist remove and set new one)
function setUserLoggedin(user: object): String {
  let loggedin: String;
  //check so that it is run on a client
  if (isClient) {
    reactLocalStorage.set("loggedin", true);
    loggedin = reactLocalStorage.get("loggedin", true);

    // set userdata updated with the logged in user
    setUserData(user);
    getUserData((res) =>
      console.info("LOCALSTORAGE: ", res, "loggedin: ", loggedin)
    );
  }
  return loggedin;
}

// Check if user is logged in -> returns a boolean
function getUserLoggedin(): Boolean {
  let loggedin: string;
  if (isClient) {
    loggedin = reactLocalStorage.get("loggedin", true);
  }
  return loggedin == "true" ? true : false || null;
}

// get userdata, returns an object or null
function getUserData(callback) {
  let userdata;
  if (isClient) {
    userdata = reactLocalStorage.getObject("userdata");
  }
  //sometimes it returns as an array, since it might get overwriten / added to in the signin process
  callback(userdata || null);
}

function logout(): String {
  if (isClient) {
    reactLocalStorage.remove("userdata");
    reactLocalStorage.set("loggedin", false);
  }
  return "user logged out";
}

function setUserData(user: Object) {
  //check if userdata obj exists, if exists remove content and set a new obj
  let userdata = reactLocalStorage.getObject("userdata");
  Object.keys(userdata) &&
    userdata.constructor === Object &&
    reactLocalStorage.remove("userdata");
  reactLocalStorage.setObject("userdata", user);
  getUserData((res) => console.info("LOCALSTORAGE: ", res));
}

function getUserPerks(callback) {
  //check if userdata obj exists, if exists remove content and set a new obj
  let userdata = reactLocalStorage.getObject("userdata");
  Object.keys(userdata).length !== 0 &&
    userdata.constructor === Object &&
    getUserData((userData) => {
      // return the perks array from an existing user
      callback(userData.perks);
    });
}

function getUserPerk(title, callback) {
  getUserPerks((perks) => {
    let perk = perks
      ? perks.find((userPerk) => userPerk.title == title)
      : getPerk(title);
    callback(perk);
  });
}

export {
  setUserLoggedin,
  getUserLoggedin,
  getUserData,
  logout,
  setUserData,
  getUserPerks,
  getUserPerk,
};
