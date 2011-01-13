(function() {
  module.exports = {
    sismember: function(k, v) {
      if (!this.exists(k)) {
        return 0;
      } else {
        if (this.assertSet(this.items[k]).items[k] != null) {
          return 1;
        } else {
          return 0;
        }
      }
    },
    tests: {
      examples: "sadd k, v:       1\nsismember k, v:  1\nsismember k, v2: 0",
      dne: "sismember k, v: 0",
      wrong_type: "non-set k:      OK\nsismember k, v: ERROR"
    }
  };
}).call(this);
