(function() {
  module.exports = {
    hmset: function(k, items) {
      var field, v, _i, _len, _ref;
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        _ref = items[_i], field = _ref[0], v = _ref[1];
        this.hset(k, field, v);
      }
      return '+OK';
    },
    tests: {
      examples: "hmset k, [[k2, v2], [k3, v3]]: OK\nhget k, k2:                    v2\nhget k, k3:                    v3"
    }
  };
}).call(this);
