(function() {
  module.exports = {
    incr: function(k) {
      return this.incrby(k, 1);
    },
    tests: {
      eg: "incr k: 1\nincr k: 2",
      setget: "set k, \"10\": OK\nincr k:      11\nget k:       \"11\"",
      bad_string: "set k, \"foo\": OK\nincr k:       1",
      non_string: "non-string k: OK\nincr k:       1"
    }
  };
}).call(this);
