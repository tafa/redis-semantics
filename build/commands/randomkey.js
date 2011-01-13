(function() {
  var __hasProp = Object.prototype.hasOwnProperty;
  module.exports = {
    randomkey: function() {
      var i, k, keys64;
      keys64 = function() {
        var _ref, _results;
        _ref = this.items;
        _results = [];
        for (k in _ref) {
          if (!__hasProp.call(_ref, k)) continue;
          _results.push(k);
        }
        return _results;
      }.call(this);
      if (keys64.length === 0) {
        return null;
      } else {
        i = this.randomInt(0, keys64.length - 1);
        return this.decodeKey(keys64[i]);
      }
    },
    tests: {
      misc: "flushdb:   OK\nrandomkey: null\nset k, v:  OK\nrandomkey: k"
    }
  };
}).call(this);
