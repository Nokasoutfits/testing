import { deleteCookie, getCookie, setCookie } from "./Cookies";
import {
  deleteLocalstorage,
  getLocalstorage,
  setLocalstorage,
} from "./Localstorage";

export const setAuthentication = (token, user) => {
  setCookie("token", token);
  setLocalstorage("user", user);
};

export const isAuthenticated = () => {
  if (getCookie("token") && getLocalstorage("user")) {
    return getLocalstorage("user");
  } else {
    return false;
  }
};

export const logout = (next) => {
  deleteCookie("token");
  deleteLocalstorage("user");

  next();
};
