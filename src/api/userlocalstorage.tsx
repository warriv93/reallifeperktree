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


function setUserLoggedin (user: object): String {
  let loggedin: String;
    //check so that it is run on a client
  if (typeof window !== "undefined") {
    loggedin = reactLocalStorage.get("loggedin", true);
    console.log(loggedin)
    reactLocalStorage.set("loggedin", true);

    reactLocalStorage.setObject("userdata", user);
    console.log(loggedin)
    getUserData(res => console.log(res))
  }
  return loggedin
}

function getUserLoggedin(): Boolean {
  let loggedin: string;
  if (typeof window !== "undefined") {
    loggedin = reactLocalStorage.get("loggedin", true)
  }
  return loggedin == "true" ? true : false || null;
}

function getUserData(callback) {
  let userdata;
  if (typeof window !== "undefined") {
    userdata = reactLocalStorage.getObject("userdata");
  }
  callback( userdata || null);
}

function logout() {
  if (typeof window !== "undefined") {
    reactLocalStorage.remove("userdata");
    reactLocalStorage.set("loggedin", false);
  }
  return "user logged out"
}

export { setUserLoggedin, getUserLoggedin, getUserData, logout };
