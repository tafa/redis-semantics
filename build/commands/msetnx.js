(function() {
  module.exports = {
    msetnx: function(items) {
      var any_exists, k, v, _i, _j, _len, _len2, _ref, _ref2;
      any_exists = 0;
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        _ref = items[_i], k = _ref[0], v = _ref[1];
        any_exists |= this.exists(k);
      }
      if (any_exists) {
        return 0;
      } else {
        for (_j = 0, _len2 = items.length; _j < _len2; _j++) {
          _ref2 = items[_j], k = _ref2[0], v = _ref2[1];
          this.set(k, v);
        }
        return 1;
      }
    },
    tests: {
      examples: "msetnx [[k, v], [k2, v2]]:   1\nmsetnx [[k2, v2], [k3, v3]]: 0\nmget [k, k2, k3]:            [v, v2, null]"
    }
  };
}).call(this);
