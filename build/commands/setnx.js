(function() {
  module.exports = {
    setnx: function(k, v) {
      if (this.exists(k)) {
        return 0;
      } else {
        this.set(k, v);
        return 1;
      }
    },
    tests: {
      examples: "setnx k, v:  1\nsetnx k, v2: 0\nget k:       v"
    }
  };
}).call(this);
