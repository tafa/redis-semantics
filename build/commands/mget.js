(function() {
  module.exports = {
    mget: function(keys) {
      var k, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        k = keys[_i];
        _results.push(this.get(k));
      }
      return _results;
    },
    tests: {
      examples: "set k, v: OK\nset k2, v2: OK\nmget [k, k2, k3]: [v, v2, null]"
    }
  };
}).call(this);
