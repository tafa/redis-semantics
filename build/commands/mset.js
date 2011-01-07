(function() {
  module.exports = {
    mset: function(items) {
      var k, v, _i, _len, _ref;
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        _ref = items[_i], k = _ref[0], v = _ref[1];
        this.set(k, v);
      }
      return '+OK';
    },
    tests: {
      examples: "mset [[k, v], [k2, v2]]: OK\nget k:                   v\nget k2:                  v2"
    }
  };
}).call(this);
