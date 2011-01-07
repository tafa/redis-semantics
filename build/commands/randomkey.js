(function() {
  var __hasProp = Object.prototype.hasOwnProperty;
  module.exports = {
    randomkey: function() {
      var i, k, keys64, random_0_to_1, random_int;
      random_0_to_1 = function() {
        var x;
        x = Math.random();
        if (x === 1) {
          return 0;
        } else {
          return x;
        }
      };
      random_int = function(a, b) {
        return Math.floor(random_0_to_1() * (b - a + 1)) + a;
      };
      keys64 = (function() {
        var _ref, _results;
        _ref = this.items;
        _results = [];
        for (k in _ref) {
          if (!__hasProp.call(_ref, k)) continue;
          _results.push(k);
        }
        return _results;
      }).call(this);
      if (keys64.length === 0) {
        return null;
      } else {
        i = random_int(0, keys64.length - 1);
        return this.decodeKey(keys64[i]);
      }
    },
    tests: {
      misc: "flushdb:   OK\nrandomkey: null\nset k, v:  OK\nrandomkey: k"
    }
  };
}).call(this);
