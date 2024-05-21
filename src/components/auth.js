// auth.js

export const isLoggedIn = () => {
    // Check if isLoggedIn is true in local storage
    return localStorage.getItem("isLoggedIn") === "true";
  };
  