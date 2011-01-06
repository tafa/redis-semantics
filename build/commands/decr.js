(function() {
  module.exports = {
    decr: function(k) {
      return this.incrby(k, -1);
    },
    tests: {
      eg: "decr k: -1\ndecr k: -2",
      setget: "set k, \"10\": OK\ndecr k:      9\nget k:       \"9\"",
      bad_string: "set k, \"foo\": OK\ndecr k:       -1",
      non_string: "non-string k: OK\ndecr k:       -1"
    }
  };
}).call(this);
