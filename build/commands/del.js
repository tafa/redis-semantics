(function() {
  module.exports = {
    del: function(keys) {
      var count, k, _i, _len;
      count = 0;
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        k = keys[_i];
        if (this.exists(k)) {
          delete this.items[k];
          count += 1;
        }
      }
      return count;
    },
    tests: {
      examples: "set k, v:        OK\nset k2, v2:      OK\ndel [k, k2, k3]: 2"
    }
  };
}).call(this);
