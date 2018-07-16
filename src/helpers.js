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
      timerId = window.eval(`setTimeout(${callback}, ${remaining})`);
    };

    this.clear = function() {
      clearTimeout(timerId);
    };

    this.resume();
  },
};

module.exports = Helpers;
