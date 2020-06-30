// MANAGE CACHED VALUES
import { reactLocalStorage } from "reactjs-localstorage";
import { getPerk } from "./index";
import { Perk as IPerk, User } from "../utils/types";

// API Guide
// --- https://www.npmjs.com/package/reactjs-localstorage
// reactLocalStorage.set("var", true);
// reactLocalStorage.get("var", true);
// reactLocalStorage.setObject("var", { test: "test" });
// reactLocalStorage.getObject("var");
// reactLocalStorage.remove("var");
// reactLocalStorage.clear();

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
export function setUserLoggedin(user: User): String {
  let loggedin: String;
  //check so that it is run on a client
  if (isClient) {
    reactLocalStorage.set("loggedin", true);
    loggedin = reactLocalStorage.get("loggedin", true);

    // set userdata updated with the logged in user
    setUserData(user);
    getUserData().then((res) =>
      console.info("LOCALSTORAGE: ", res, "loggedin: ", loggedin)
    );
  }
  return loggedin;
}

// Check if user is logged in -> returns a boolean
export function getUserLoggedin(): Boolean {
  let loggedin: string;
  if (isClient) {
    loggedin = reactLocalStorage.get("loggedin", true);
  }
  return loggedin == "true" ? true : false || null;
}

// get userdata, returns an object or null
export async function getUserData() {
  return isClient ? await reactLocalStorage.getObject("userdata") : null;
}

export function logout(): String {
  if (isClient) {
    reactLocalStorage.remove("userdata");
    reactLocalStorage.set("loggedin", false);
    return "user logged out";
  } else return "You are not a client";
}

export function setUserData(user: User) {
  //check if userdata obj exists, if exists remove content and set a new obj
  let userdata = reactLocalStorage.getObject("userdata");
  Object.keys(userdata) &&
    userdata.constructor === Object &&
    reactLocalStorage.remove("userdata");
  reactLocalStorage.setObject("userdata", user);
  getUserData().then((res) => console.info("LOCALSTORAGE: ", res));
}

export async function getUserPerks(): Promise<Array<IPerk>> {
  //check if userdata obj exists, if exists remove content and set a new obj
  let userdata = reactLocalStorage.getObject("userdata");
  return (
    Object.keys(userdata).length !== 0 &&
    userdata.constructor === Object &&
    getUserData().then((userData) => {
      // return the perks array from an existing user
      return userData.perks;
    })
  );
}

export async function getUserPerk(title: string): Promise<IPerk> {
  return await getUserPerks().then((perks) => {
    return perks
      ? perks.find((userPerk) => userPerk.title == title)
      : getPerk(title);
  });
}
