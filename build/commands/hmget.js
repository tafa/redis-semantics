(function() {
  module.exports = {
    hmget: function(k, fields) {
      var field, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = fields.length; _i < _len; _i++) {
        field = fields[_i];
        _results.push(this.hget(k, field));
      }
      return _results;
    },
    tests: {
      examples: "hset k, k2, v2:    1\nhset k, k3, v3:    1\nhmget k, [k2, k3]: [v2, v3]"
    }
  };
}).call(this);
