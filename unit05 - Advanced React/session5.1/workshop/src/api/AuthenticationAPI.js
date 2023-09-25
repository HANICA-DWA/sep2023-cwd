// An authentication service that keeps track if user is logged in or not
// it uses a very naive implementation and only checks if username and password are equal
export default {
  isLoggedIn: false,

  login: function(username, password, callback) {
    // if called with a callback function,
    // fake a 1 second asynchronous client-server communication
    // before updating the isLoggedIn status
    if (typeof callback === "function") {
      setTimeout(() => {
        this.isLoggedIn = username === password;
        callback();
      }, 1000);
    } else {
      this.isLoggedIn = username === password;
    }
  },

  logout: function(callback) {
    // if called with a callback function,
    // fake a 1 second asynchronous client-server communication
    // before updating the isLoggedIn status
    if (typeof callback === "function") {
      setTimeout(() => {
        this.isLoggedIn = false;
        callback();
      }, 1000);
    } else {
      this.isLoggedIn = false;
    }
  }
};
