var Helpers = {
  Timer: function(callback, delay) {
    var timerId;
    var start;
    var remaining = delay;

    this.pause = function() {
      clearTimeout(timerId);
      remaining -= new Date() - start;
    };

    this.resume = function() {
      start = new Date();
      clearTimeout(timerId);
      if (window.wrappedJSObject) {
        timerId = window.wrappedJSObject.setTimeout(callback, remaining);
      } else {
        timerId = setTimeout(callback, remaining);
      }
    };

    this.clear = function() {
      clearTimeout(timerId);
    };

    this.resume();
  },
};

module.exports = Helpers;
