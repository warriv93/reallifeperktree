// MANAGE CACHE VALUE

import { reactLocalStorage } from "reactjs-localstorage";

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
const isClient = typeof document !== 'undefined'


function setUserLoggedin (user: object): String {
  let loggedin: String;
    //check so that it is run on a client
  if (isClient) {
    reactLocalStorage.set("loggedin", true);
    loggedin = reactLocalStorage.get("loggedin", true);

    //check if userdata is empty, if not remove content and set a new obj
    let userdata = reactLocalStorage.getObject("userdata")
    Object.keys(userdata).length !== 0 && userdata.constructor === Object && reactLocalStorage.remove("userdata")
    reactLocalStorage.setObject("userdata", user);
    getUserData(res => console.info("LOCALSTORAGE: ", res, "loggedin: ", loggedin))
  }
  return loggedin
}

function getUserLoggedin(): Boolean {
  let loggedin: string;
  if (isClient) {
    loggedin = reactLocalStorage.get("loggedin", true)
  }
  return loggedin == "true" ? true : false || null;
}

function getUserData(callback) {
  let userdata;
  if (isClient) {
    userdata = reactLocalStorage.getObject("userdata");
  }
  //sometimes it returns as an array, since it might get overwriten / added to in the signin process
  callback( userdata.length > 0 ? userdata[0] : userdata || null);
}

function logout() {
  if (isClient) {
    reactLocalStorage.remove("userdata");
    reactLocalStorage.set("loggedin", false);
  }
  return "user logged out"
}

export { setUserLoggedin, getUserLoggedin, getUserData, logout };
