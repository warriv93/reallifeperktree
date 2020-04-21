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

let loggedin: String;

function setUserLoggedin (): String {
    //check so that it is run on a client
  if (typeof window !== "undefined") {

    reactLocalStorage.set("loggedin", true);
    loggedin = reactLocalStorage.get("loggedin", true);
    reactLocalStorage.setObject("userdata", { username: "test" });
    console.log(loggedin)
    console.log(getUserData())
  }
  return loggedin
}

function getUserLoggedin(): Boolean {
    console.log(loggedin);
    
  return loggedin == "true" ? true : false;
}

function getUserData() {
  return reactLocalStorage.getObject("userdata");
}

function logout() {
    reactLocalStorage.remove("userdata");
    reactLocalStorage.set("loggedin", false);

  return "user logged out"
}

export { setUserLoggedin, getUserLoggedin, getUserData, logout };
