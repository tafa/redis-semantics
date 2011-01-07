(function() {
  module.exports = {
    exists: function(k) {
      if (this.items[k] != null) {
        return 1;
      } else {
        return 0;
      }
    },
    tests: {
      examples: "set k, v:  OK\nexists k:  1\nexists k2: 0"
    }
  };
}).call(this);
